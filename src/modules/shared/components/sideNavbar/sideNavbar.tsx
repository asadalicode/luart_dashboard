import Style from './sideNavbar.module.scss';
import { ReactComponent as DashboardIcon } from '../../../../assets/images/dashboard.svg';
import { ReactComponent as TradeIcon } from '../../../../assets/images/trade.svg';
import { ReactComponent as StakingIcon } from '../../../../assets/images/staking.svg';
import { ReactComponent as Liquiditycon } from '../../../../assets/images/liquidity.svg';
import { ReactComponent as VestingIcon } from '../../../../assets/images/vesting.svg';
import { ReactComponent as LeaderboardIcon } from '../../../../assets/images/leaderboard.svg';
import { ReactComponent as MarketplaceIcon } from '../../../../assets/images/marketplace.svg';
import { ReactComponent as LaunchpadIcon } from '../../../../assets/images/launchpad.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const pages = ['Launchpad', 'Marketplace'];
const sideBarPagesList = [
    { Icon: DashboardIcon, title: 'Dashboard', acitveItem: false },
    { Icon: TradeIcon, title: 'Trade', acitveItem: false },
    { Icon: StakingIcon, title: 'Staking', acitveItem: true },
    { Icon: Liquiditycon, title: 'Liquidity', acitveItem: false },
    { Icon: VestingIcon, title: 'Vesting', acitveItem: false }
]
const sideBarPages1 = [
    { Icon: LeaderboardIcon, title: 'Leaderboard', acitveItem: false },
    { Icon: MarketplaceIcon, title: 'Marketplace', acitveItem: false },
    { Icon: LaunchpadIcon, title: 'Launchpad', acitveItem: false }
]

const SideNavbar = () => {
    const [sideBarPages, setsideBarPages] = useState([...sideBarPagesList])
    const [currentActive, setCurrentActive] = useState(2);

    let navigate = useNavigate();

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

    return (
        <div className={Style.sideNavbar}>
            <div className={Style.container}>
                <div>

                    <h6 className={Style.title}>LUART Application</h6>
                    {sideBarPages?.map((item, index) => {
                        return (
                            <div>
                                <a
                                    onClick={() => handleRouting(index)}
                                    className={`d-flex align-items-center ${Style.item} ${item.acitveItem ? Style.activeItem : ''}`}>
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

    );
}
export default SideNavbar;