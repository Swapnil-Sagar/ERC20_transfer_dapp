import React from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledTooltip,
} from "reactstrap";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuSunDim } from "react-icons/lu";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import logo from "../../assets/logo.svg";
import dropdownLogo from "../../assets/spa.svg";
import { HeaderContainer } from "./style";

const Header = ({ connect, active, disconnect, account }) => {
	const [dropdownOpen, setDropdownOpen] = React.useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	return (
		<HeaderContainer>
			<Navbar light expand='md' className='d-flex justify-content-between'>
				<Nav className='me-5 d-flex align-items-center' navbar>
					<NavItem>
						<NavLink className='fw-bolder' href='/'>
							<img className='me-2 header-logo' src={logo} alt='Logo' />
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-item' href='/'>
							Demeter{" "}
							<span className='arrow mx-1 ms-2 '>
								<FaArrowUpRightFromSquare size={14} />
							</span>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-item' href='/'>
							Gauge
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-item' href='/'>
							Stake
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-item' href='/'>
							Buyback
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-item' href='/'>
							Swap
						</NavLink>
					</NavItem>
					<NavItem className=' d-flex align-items-center'>
						<NavLink className='nav-item' href='/'>
							More <FaChevronDown className='ms-1 mt-50' size={14} />
						</NavLink>
					</NavItem>
				</Nav>

				<div className='d-flex align-items-center'>
					<Button className='mx-2 btn-primary'>Buy SPA & USDs</Button>

					<Dropdown className='mx-2' isOpen={dropdownOpen} toggle={toggleDropdown}>
						<DropdownToggle
							color='light'
							className='p-1 px-2 d-flex align-items-center header-round-dropdown'
							caret
						>
							<img src={dropdownLogo} alt='Logo' />
							<span className='mx-1'>0</span>
							<FaChevronDown size={14} />
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem href='/'>Sperax dapp</DropdownItem>
							<DropdownItem href='/'>Demeter dapp</DropdownItem>
						</DropdownMenu>
					</Dropdown>

					{!active ? (
						<Button className='mx-2 btn-primary' onClick={connect}>
							Connect wallet
						</Button>
					) : (
						<>
							<Button className='mx-2 btn-primary' id='disconnectBtn' onClick={disconnect}>
								Disconnect
							</Button>
							<UncontrolledTooltip placement='bottom' target='disconnectBtn'>
								{account}
							</UncontrolledTooltip>
						</>
					)}
					<Button className='theme-toggle-btn mx-2'>
						<LuSunDim size={20} />
					</Button>
					<Button color='light' className='ms-1 p-0 rounded-circle'>
						<HiOutlineEllipsisHorizontal size={26} />
					</Button>
				</div>
			</Navbar>
		</HeaderContainer>
	);
};

export default Header;
