import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { Toaster } from "react-hot-toast";

function getLibrary(provider) {
	return new Web3(provider);
}
function App() {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Toaster />
			<Header />
			<Main />
			<Footer />
		</Web3ReactProvider>
	);
}

export default App;
