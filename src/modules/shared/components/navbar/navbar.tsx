import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
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

const pages = ['Launchpad', 'Marketplace'];
const sideBarPages = [
    { Icon: DashboardIcon, title: 'Dashboard' },
    { Icon: TradeIcon, title: 'Trade' },
    { Icon: StakingIcon, title: 'Staking' },
    { Icon: Liquiditycon, title: 'Liquidity' },
    { Icon: VestingIcon, title: 'Vesting' }
]
const sideBarPages1 = [
    { Icon: LeaderboardIcon, title: 'Leaderboard' },
    { Icon: MarketplaceIcon, title: 'Marketplace' },
    { Icon: LaunchpadIcon, title: 'Launchpad' }
]



const Navbar = ({ handleMobileNavbar }: any) => {
    const [isMenueOpen, setIsMenuOpen] = React.useState(false);

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
                                <Button className={`mt-4 ${Style.connectWallet} `} >
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
                            {sideBarPages.map((item) => {
                                return (
                                    <div>
                                        <a className={`d-flex align-items-center ${Style.item}`}>
                                           <item.Icon height={20}/> <span className='ms-2'>{item.title}</span>
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
