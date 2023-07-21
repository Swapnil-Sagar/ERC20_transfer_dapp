import React from "react";
import { TransferWrap } from "./style";
import { Button, Card, Input, Label } from "reactstrap";

const TransferCard = () => {
	return (
		<TransferWrap>
			<h1>Transfer ERC20 Token</h1>
			<Card>
				<Label className='mt-0 pt-0'>Receipient's Ethereum Address</Label>
				<Input placeholder='Enter Ethereum address' />
				<Label className='mt-3 pt-0'>Token Amount</Label>
				<Input placeholder='Enter token amount' />
				<Button className='btn-primary mt-3'>Transfer</Button>
			</Card>
		</TransferWrap>
	);
};

export default TransferCard;
