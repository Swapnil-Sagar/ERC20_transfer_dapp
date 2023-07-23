import React from "react";
import { BalanceWrap } from "./style";
import { Button, Card, Input, Label } from "reactstrap";
import Web3 from "web3";

const BalanceCard = ({ setTokenAddress, tokenAddress, setBalance, getBalance, setInfo }) => {
	const isValidAddress = () => {
		try {
			const web3 = new Web3();
			web3.utils.toChecksumAddress(tokenAddress);
			getBalance();
		} catch (e) {
			setInfo("Please enter correct Ethereum Address!");
		}
	};

	const handleSetAddress = (value) => {
		setInfo("");
		setBalance("");
		setTokenAddress(value);
	};

	const handleSubmit = () => {
		if (!tokenAddress) setInfo("Address cannot be empty!");
		else isValidAddress();
	};

	return (
		<BalanceWrap>
			<h1>ERC20 Token Balance</h1>
			<Card className='card'>
				<Label className='mt-0 pt-0'>Ethereum Address</Label>
				<Input
					placeholder='Enter Ethereum address'
					onChange={(e) => handleSetAddress(e.target.value)}
				/>
				<Button className='btn-primary mt-3' onClick={handleSubmit}>
					Submit
				</Button>
			</Card>
		</BalanceWrap>
	);
};

export default BalanceCard;
