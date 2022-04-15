import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Style from './navbar.module.scss';
import logo from '../../../../assets/images/logo.svg';
import { ReactComponent as Wallet } from '../../../../assets/images/wallet.svg';
import { ReactComponent as MenuIcon } from '../../../../assets/images/menu.svg';
import { ReactComponent as CrossIcon } from '../../../../assets/images/cross.svg';
import { ReactComponent as DashboardIcon } from '../../../../assets/images/dashboard.svg';
import { ReactComponent as TradeIcon } from '../../../../assets/images/trade.svg';
import { ReactComponent as StakingIcon } from '../../../../assets/images/staking.svg';
import { ReactComponent as Liquiditycon } from '../../../../assets/images/liquidity.svg';
import { ReactComponent as VestingIcon } from '../../../../assets/images/vesting.svg';
import { ReactComponent as LeaderboardIcon } from '../../../../assets/images/leaderboard.svg';
import { ReactComponent as MarketplaceIcon } from '../../../../assets/images/marketplace.svg';
import { ReactComponent as LaunchpadIcon } from '../../../../assets/images/launchpad.svg';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const pages = ['Launchpad', 'Marketplace'];
const sideBarPagesList =
    [
        { Icon: DashboardIcon, title: 'Dashboard', acitveItem: false },
        { Icon: TradeIcon, title: 'Trade', acitveItem: false },
        { Icon: StakingIcon, title: 'Staking', acitveItem: true },
        { Icon: Liquiditycon, title: 'Liquidity', acitveItem: false },
        { Icon: VestingIcon, title: 'Vesting', acitveItem: false }
    ]

const sideBarPages1 = [
    { Icon: LeaderboardIcon, title: 'Leaderboard' },
    { Icon: MarketplaceIcon, title: 'Marketplace' },
    { Icon: LaunchpadIcon, title: 'Launchpad' }
]



const Navbar = ({ handleMobileNavbar }: any) => {
    const [isMenueOpen, setIsMenuOpen] = useState(false);
    const [sideBarPages, setsideBarPages] = useState([...sideBarPagesList])
    const [currentActive, setCurrentActive] = useState(2);

    let navigate = useNavigate();
    let location = useLocation;
    let pathname = location().pathname;

    useEffect(() => {
        setIsMenuOpen(false);
        handleMobileNavbar(false);
    }, [pathname]);

    const handleRouting = (index: any) => {
        if (index === 2 || index === 3) {
            let _sidebar = [...sideBarPages];
            _sidebar[index].acitveItem = true;
            _sidebar[currentActive].acitveItem = false;
            setCurrentActive(index);
            setsideBarPages(_sidebar);
            if (index === 2)
                navigate("/");
            else
                navigate("/liquidity")
        }
    }

    const handleOpenNavMenu = () => {
        setIsMenuOpen((prev) => !prev);
        handleMobileNavbar(!isMenueOpen);
    }


    return (
        <>
            <AppBar position="static" className={Style.barContainer}>
                <div className='container'>
                    <Toolbar disableGutters>

                        <Box sx={{ flexGrow: 1 }}>
                            <img src={logo} />
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleOpenNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        className={Style.navItem}
                                    >
                                        {page}
                                    </Button>
                                ))}

                            </Box>

                            <Box sx={{ display: { md: 'flex' } }}>
                                <Button className={`bg-light mt-4 ${Style.connectWallet} `} >
                                    <span>
                                        <Wallet height="20" />
                                    </span>
                                    <span className='mt-1'>
                                        Connect Wallet
                                    </span>
                                </Button>

                            </Box>


                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                {
                                    isMenueOpen ?
                                        <CrossIcon fill={"white"} /> :
                                        <MenuIcon />
                                }

                            </IconButton>
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
            {
                isMenueOpen &&
                <div className={Style.mobileNavbar}>
                    <div className={Style.container}>
                        <div>

                            <h6 className={Style.title}>LUART Application</h6>
                            {sideBarPages.map((item, index) => {
                                return (
                                    <div>
                                        <a
                                            onClick={() => handleRouting(index)}
                                            className={`d-flex align-items-center ${Style.item} ${item.acitveItem ? Style.selectedItem : ''}`}>
                                            <item.Icon height={20} /> <span className='ms-2'>{item.title}</span>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='mt-5'>

                            <h6 className={Style.title}>Others</h6>
                            {sideBarPages1.map((item) => {
                                return (
                                    <div>
                                        <a className={`d-flex align-items-center ${Style.item}`}>
                                            <item.Icon height={20} /> <span className='ms-2'>{item.title}</span>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
export default Navbar;
