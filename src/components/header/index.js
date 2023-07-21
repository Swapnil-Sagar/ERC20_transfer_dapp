import React from "react";
import "./style.css";
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
} from "reactstrap";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuSunDim } from "react-icons/lu";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import logo from "../../assets/logo.svg";
import dropdownLogo from "../../assets/spa.svg";

const Header = () => {
	// State for the dropdown
	const [dropdownOpen, setDropdownOpen] = React.useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	return (
		<Navbar light expand='md' className='d-flex justify-content-between main-navbar'>
			{/* Left side of the header */}

			<Nav className='me-5 d-flex align-items-center' navbar>
				<NavItem>
					<NavLink className='fw-bolder' href='/'>
						<img className='me-2 header-logo' src={logo} alt='Logo' />
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='/'>
						Demeter{" "}
						<span className='arrow mx-1 ms-2 '>
							<FaArrowUpRightFromSquare size={14} />
						</span>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='/'>Gauge</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='/'>Stake</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='/'>Buyback</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href='/'>Swap</NavLink>
				</NavItem>
				<NavItem className='d-flex align-items-center'>
					<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
						<DropdownToggle nav caret>
							More <FaChevronDown className='ms-1 mt-50' size={14} />
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem href='/'>Option 1</DropdownItem>
							<DropdownItem href='/'>Option 2</DropdownItem>
							<DropdownItem href='/'>Option 3</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavItem>
			</Nav>

			{/* Right side of the header */}
			<div className='d-flex align-items-center'>
				<Button className='mx-2 btn-primary'>Buy SPA & USDs</Button>

				{/* Pill shaped dropdown */}
				<Dropdown className='mx-2' isOpen={dropdownOpen} toggle={toggleDropdown}>
					<DropdownToggle
						className='p-1 px-2 d-flex align-items-center header-round-dropdown'
						caret
					>
						<img src={dropdownLogo} alt='Logo' />
						<span className='mx-1'>0</span>
						<FaChevronDown size={14} />
					</DropdownToggle>
					<DropdownMenu right>
						<DropdownItem href='/'>Option 1</DropdownItem>
						<DropdownItem href='/'>Option 2</DropdownItem>
						<DropdownItem href='/'>Option 3</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Button className='mx-2 btn-primary'>Connect wallet</Button>
				<Button className='theme-toggle-btn mx-2'>
					<LuSunDim size={20} />
				</Button>
				<Button color='light' className='ms-1 p-0 rounded-circle'>
					<HiOutlineEllipsisHorizontal size={26} />
				</Button>
			</div>
		</Navbar>
	);
};

export default Header;
