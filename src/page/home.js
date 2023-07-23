import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../utils/connector";

const Home = () => {
	const { active, account, activate, deactivate } = useWeb3React();

	async function connect() {
		await activate(injected);
		localStorage.setItem("isWalletConnected", true);
	}

	async function disconnect() {
		deactivate();
		localStorage.setItem("isWalletConnected", false);
	}

	return (
		<div>
			<Toaster />
			<Header active={active} connect={connect} disconnect={disconnect} account={account} />
			<Main account={account} />
			<Footer />
		</div>
	);
};

export default Home;
