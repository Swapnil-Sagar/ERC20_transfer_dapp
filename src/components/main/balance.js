import React from "react";
import { BalanceWrap } from "./style";
import { Button, Card, Input, Label } from "reactstrap";

const BalanceCard = () => {
	return (
		<BalanceWrap>
			<h1>ERC20 Token Balance</h1>
			<Card className='card'>
				<Label className='mt-0 pt-0'>Ethereum Address</Label>
				<Input placeholder='Enter Ethereum address' />
				<Button className='btn-primary mt-3'>Submit</Button>
			</Card>
		</BalanceWrap>
	);
};

export default BalanceCard;
