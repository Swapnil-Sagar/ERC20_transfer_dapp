import React from "react";
import { TransferWrap } from "./style";
import { Button, Card, Input, Label } from "reactstrap";
import Web3 from "web3";

const TransferCard = ({
	setReceiverAddress,
	setTransferAmount,
	transfer,
	receiverAddress,
	setInfo,
	transferAmount,
}) => {
	const isValidAddress = () => {
		try {
			const web3 = new Web3();
			web3.utils.toChecksumAddress(receiverAddress);
			transfer();
		} catch (e) {
			setInfo("Please enter correct Ethereum Address!");
		}
	};

	const handleSetAddress = (value) => {
		setInfo("");
		setReceiverAddress(value);
	};

	const handleSubmit = () => {
		if (!receiverAddress) setInfo("Receipient address cannot be empty!");
		if (!transferAmount) setInfo("Transfer amount cannot be empty!");
		else isValidAddress();
	};

	return (
		<TransferWrap>
			<h1>Transfer ERC20 Token</h1>
			<Card>
				<Label className='mt-0 pt-0'>Receipient's Ethereum Address</Label>
				<Input
					placeholder='Enter Ethereum address'
					onChange={(e) => handleSetAddress(e.target.value)}
				/>
				<Label className='mt-3 pt-0'>Token Amount</Label>
				<Input
					placeholder='Enter token amount'
					onChange={(e) => setTransferAmount(e.target.value)}
				/>
				<Button className='btn-primary mt-3' onClick={handleSubmit}>
					Transfer
				</Button>
			</Card>
		</TransferWrap>
	);
};

export default TransferCard;
