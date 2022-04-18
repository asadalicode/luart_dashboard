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

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const pagesList = [
    { title: 'Staking', acitveItem: true, route: '/' },
    { title: 'Liquidity', acitveItem: false, route: '/liquidity' },
    { title: 'Trade', acitveItem: false, route: '/trade' },
];

const Navbar = ({ handleMobileNavbar }: any) => {
    const [isMenueOpen, setIsMenuOpen] = useState(false);
    const [pages, setPages] = useState([...pagesList]);
    const [currentActive, setCurrentActive] = useState(0);

    let navigate = useNavigate();
    let location = useLocation;
    let pathname = location().pathname;

    useEffect(() => {
        setIsMenuOpen(false);
        handleMobileNavbar(false);
    }, [pathname]);

    const handleRouting = (index: any) => {
        let _pages = [...pages];
        _pages[currentActive].acitveItem = false;
        _pages[currentActive].acitveItem = true;
        setPages([...pages]);
        setCurrentActive(index);
        navigate(pages[index].route);
    }

    const handleOpenNavMenu = () => {
        setIsMenuOpen((prev) => !prev);
        handleMobileNavbar(!isMenueOpen);
    }


    return (
        <>
            <AppBar position="static" className={Style.barContainer}>
                <div className='container'>
                    <Toolbar className='mx-3' disableGutters>

                        <Box sx={{ flexGrow: 1 }}>
                            <img src={logo} />
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page, index) => (
                                    <Button
                                        key={index}
                                        onClick={()=>handleRouting(index)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        className={Style.navItem}
                                    >
                                        {page.title}
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
                            {pages.map((item, index) => {
                                return (
                                    <div>
                                        <a
                                            onClick={() => handleRouting(index)}
                                            className={`d-flex align-items-center ${Style.item} ${item.acitveItem ? Style.selectedItem : ''}`}>
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
