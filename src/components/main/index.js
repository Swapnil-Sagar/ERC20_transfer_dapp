import React, { useState } from "react";
import { MainContainer } from "./style";
import BalanceCard from "./balance";
import TransferCard from "./transfer";
import { Card } from "reactstrap";
import Web3 from "web3";
import ContractAbi from "../../utils/contractAbi.json";
import { toast } from "react-hot-toast";

const Account = process.env.REACT_APP_ACCOUNT;
const PrivateKey = process.env.REACT_APP_PRIVATE_KEY;
const RpcHttpUrl = process.env.REACT_APP_RPC_HTTP_URL;

const web3 = new Web3(new Web3.providers.HttpProvider(RpcHttpUrl));

const showBalance = (balance) => {
	return (
		<Card className='tokenCard'>
			<div className='top' />
			<div className='bottom d-flex justify-content-between align-items-center'>
				<span>Token Balance</span>
				<h5>{balance}</h5>
			</div>
		</Card>
	);
};

const showError = (err) => {
	return (
		<Card className='errorCard d-flex justify-content-between align-items-center'>
			<span>{err}</span>
		</Card>
	);
};

const Main = () => {
	const [receiverAddress, setReceiverAddress] = useState("");
	const [transferAmount, setTransferAmount] = useState("");
	const [tokenAddress, setTokenAddress] = useState("");
	const [error, setError] = useState("");
	const [balance, setBalance] = useState("");
	const [loading, setLoading] = useState(false);

	async function transfer() {
		//get nonce
		console.log(tokenAddress, receiverAddress, transferAmount);
		const nonce = await web3.eth.getTransactionCount(Account, "latest");
		const value = web3.utils.toWei(transferAmount.toString(), "Ether");
		const tokenContract = new web3.eth.Contract(ContractAbi, tokenAddress);
		const data = tokenContract.methods.transfer(receiverAddress, value).encodeABI();

		//prepare transaction. fields - to, value, gasPrice, gasLimit, nonce
		const transaction = {
			to: tokenAddress,
			value: "0x00",
			gasLimit: 6721975, //changed after EIP-1559 upgrade
			gasPrice: 20000000000, //changed after EIP-1559 upgrade
			nonce: nonce,
			data: data,
		};

		//create signed transaction
		const signTrx = await web3.eth.accounts.signTransaction(transaction, PrivateKey);
		//send signed transaction
		web3.eth.sendSignedTransaction(signTrx.rawTransaction, function (error, hash) {
			if (error) {
				console.log("Something went wrong", error);
			} else {
				console.log("transaction submitted ", hash);
				window.alert("Transaction submitted. Hash : " + hash);
			}
		});
	}
	async function getBalance() {
		// const tokenAddress = "0x53844F9577C2334e541Aec7Df7174ECe5dF1fCf0";
		// const walletAddress = "0x574B0ED1859583237AeA53687c9702cC73b2a0ea";
		try {
			const tokenContract = new web3.eth.Contract(ContractAbi, tokenAddress);
			const result = await tokenContract.methods.balanceOf(Account).call();

			// const format = web3.utils.fromWei(+result.toString());
			console.log(result, typeof result, result.toString());
			setBalance(result.toString());
		} catch (e) {
			console.log(e);
			toast.error("Something went wrong! Please check log for details.");
		}
	}

	return (
		<MainContainer>
			<BalanceCard
				setTokenAddress={setTokenAddress}
				tokenAddress={tokenAddress}
				getBalance={getBalance}
				setBalance={setBalance}
				setError={setError}
			/>
			{error && showError(error)}
			{balance && showBalance(balance)}
			<TransferCard
				setReceiverAddress={setReceiverAddress}
				setTransferAmount={setTransferAmount}
				transfer={transfer}
			/>
		</MainContainer>
	);
};

export default Main;
