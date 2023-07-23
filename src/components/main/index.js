import React, { useEffect, useState } from "react";
import { MainContainer } from "./style";
import BalanceCard from "./balance";
import TransferCard from "./transfer";
import { Card } from "reactstrap";
import Web3 from "web3";
import ContractAbi from "../../utils/contractAbi.json";
import { toast } from "react-hot-toast";
import { ellipsis } from "../../utils/utils";

const Account = process.env.REACT_APP_ACCOUNT;
const PrivateKey = process.env.REACT_APP_PRIVATE_KEY;
const RpcHttpUrl = process.env.REACT_APP_RPC_HTTP_GORELI_URL;

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

const showInfo = (info) => {
	return (
		<Card className='errorCard d-flex justify-content-between align-items-center'>
			<span>{info}</span>
		</Card>
	);
};

const Main = ({ account }) => {
	const [receiverAddress, setReceiverAddress] = useState("");
	const [transferAmount, setTransferAmount] = useState("");
	const [tokenAddress, setTokenAddress] = useState("");
	const [info, setInfo] = useState("");
	const [balance, setBalance] = useState("");
	const [loading, setLoading] = useState(false);

	async function transfer() {
		setLoading(true);
		//get nonce
		console.log(tokenAddress, receiverAddress, transferAmount, account, Account);
		try {
			const nonce = await web3.eth.getTransactionCount(Account, "latest");
			const value = web3.utils.toWei(transferAmount.toString(), "Ether");
			const tokenContract = new web3.eth.Contract(ContractAbi, tokenAddress);
			const data = tokenContract.methods.transfer(receiverAddress, value).encodeABI();

			//prepare transaction. fields - to, value, gasPrice, gasLimit, nonce
			const transaction = {
				to: receiverAddress,
				value: "0x00",
				gasLimit: 6721975,
				gasPrice: 10,
				nonce: nonce,
				data: data,
			};

			//create signed transaction
			const signTrx = await web3.eth.accounts.signTransaction(transaction, PrivateKey);
			web3.eth.sendSignedTransaction(signTrx.rawTransaction, function (error, hash) {
				if (error) {
					console.log("Something went wrong", error);
				} else {
					console.log("transaction submitted ", hash);
					// window.alert("Transaction submitted. Hash : " + hash);
					setInfo("Transaction submitted. Hash : " + ellipsis(hash.toString(), 40));
				}
			});
		} catch (e) {
			console.log("transferError", e);
		}
	}
	async function getBalance() {
		try {
			console.log("getbalance", tokenAddress, Account, account);
			const tokenContract = new web3.eth.Contract(ContractAbi, tokenAddress);
			const result = await tokenContract.methods.balanceOf(Account).call();

			const format = web3.utils.fromWei(result);
			console.log(result, format, typeof result);
			setBalance(format);
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
				setInfo={setInfo}
			/>
			{info && showInfo(info)}
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
