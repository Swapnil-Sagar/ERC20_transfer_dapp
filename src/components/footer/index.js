import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaChevronDown, FaDiscord, FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import footerLogo from "../../assets/footerLogo.svg";
import gecko from "../../assets/gecko.svg";
import swap from "../../assets/swap.svg";
import bridge from "../../assets/bridge.svg";
import { BsMedium } from "react-icons/bs";
import wspa from "../../assets/wspa.svg";
import spa from "../../assets/spa.svg";
import vespa from "../../assets/vespa.svg";
import usds from "../../assets/usds.svg";

import { FooterContainer } from "./style";

const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				{/* First Row */}
				<Row className='mb-3 mt-3'>
					<Col md={6}>
						<div className='d-flex align-items-center footer-navs'>
							<img src={footerLogo} alt='Logo' className='me-3' style={{ height: "30px" }} />
							<p>Forum</p>

							<p>Snapshot</p>
						</div>
					</Col>
					<Col md={6}>
						<div className='d-flex justify-content-end footer-social'>
							<a href='/'>
								<FaDiscord size={24} color='#abb7bd' className='mx-1' />
							</a>
							<a href='/'>
								<FaTwitter size={24} color='#abb7bd' className='mx-1' />
							</a>
							<a href='/'>
								<FaTelegram size={24} color='#abb7bd' className='mx-1' />
							</a>
							<a href='/'>
								<FaGithub size={24} color='#abb7bd' className='mx-1' />
							</a>
							<a href='/'>
								<BsMedium size={24} color='#abb7bd' className='mx-1' />
							</a>
						</div>
					</Col>
				</Row>

				{/* Second Row */}
				<Row className='d-flex align-items-baseline justify-content-between mb-3 pt-4 coin-row'>
					<Col md={3} className='token-col'>
						<div className='d-flex align-items-center'>
							<img src={usds} className='me-2' alt='Logo' />

							<span>USDs Arbitrum</span>
							<TbCopy color='#707E85' size={18} className='ms-2' />
							<FaArrowUpRightFromSquare color='#707E85' size={14} className='ms-2' />
						</div>
						<div className='d-flex mt-4'>
							<SiCoinmarketcap color='#85939A' size={24} className='me-3' />
							<img src={gecko} className='me-2' alt='Logo' />
						</div>
					</Col>
					<Col md={3} className='token-col'>
						<div className='d-flex align-items-center'>
							<img src={spa} className='me-2' alt='Logo' />

							<span>SPA Arbitrum</span>
							<FaChevronDown color='#707E85' size={14} className='ms-2' />
							<TbCopy color='#707E85' size={18} className='ms-2' />
							<FaArrowUpRightFromSquare color='#707E85' size={14} className='ms-2' />
						</div>
						<div className='d-flex mt-4'>
							<SiCoinmarketcap color='#85939A' size={24} className='me-3' />
							<img src={gecko} className='me-2' alt='Logo' />
						</div>
					</Col>
					<Col md={3} className='token-col'>
						<div className='d-flex align-items-center'>
							<img src={vespa} className='me-2' alt='Logo' />

							<span>veSPA Arbitrum</span>
							<FaChevronDown color='#707E85' size={14} className='ms-2' />
							<TbCopy color='#707E85' size={18} className='ms-2' />
							<FaArrowUpRightFromSquare color='#707E85' size={14} className='ms-2' />
						</div>
						<div className='d-flex mt-3'>
							{/* <SiCoinmarketcap color='#85939A' size={24} className='me-2' />
							<img src={gecko} className='me-2' alt='Logo' /> */}
						</div>
					</Col>
					<Col md={3} className='token-col'>
						<div className='d-flex align-items-center'>
							<img src={wspa} className='me-2' alt='Logo' />

							<span>wSPA Ethereum</span>
							<TbCopy color='#707E85' size={18} className='ms-2' />
							<FaArrowUpRightFromSquare color='#707E85' size={14} className='ms-2' />
						</div>
						<div className='d-flex mt-4'>
							<img src={swap} className='me-2' alt='Logo' />
							<span>
								SPA <span className='mx-1'>➔</span> wSPA
							</span>
						</div>
						<div className='d-flex mt-3'>
							<img src={bridge} className='me-2' alt='Logo' />
							<span>Sperax- Arbtrum Bridge</span>
						</div>
					</Col>
				</Row>

				{/* Third Row */}
				<Row className='info-row mt-5'>
					<Col md={6} className='rights'>
						<span>@ 2023 Sperax Inc. All rights reserved.</span>
					</Col>
					<Col md={5} className='terms ms-5'>
						<div className='d-flex justify-content-end'>
							<p>Terms of Service</p>
							<span className='mx-2 dot'>•</span>
							<li>Privacy Policy</li>
						</div>
					</Col>
				</Row>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
