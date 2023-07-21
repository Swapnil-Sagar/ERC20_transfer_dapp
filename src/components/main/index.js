import React from "react";
import { MainContainer } from "./style";
import BalanceCard from "./balance";
import TransferCard from "./transfer";
import { Card } from "reactstrap";

const showBalance = () => {
	return (
		<Card className='tokenCard'>
			<div className='top' />
			<div className='bottom d-flex justify-content-between align-items-center'>
				<span>Token Balance</span>
				<h5>0.00</h5>
			</div>
		</Card>
	);
};

const showError = () => {
	return (
		<Card className='errorCard d-flex justify-content-between align-items-center'>
			<span>Please enter correct Ethereum Address!</span>
		</Card>
	);
};

const Main = () => {
	return (
		<MainContainer>
			<BalanceCard />
			{showError()}
			{showBalance()}
			<TransferCard />
		</MainContainer>
	);
};

export default Main;
