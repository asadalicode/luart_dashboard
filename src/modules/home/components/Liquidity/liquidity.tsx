import Style from "./liquidity.module.scss";
import { ReactComponent as InfoIcon } from "../../../../assets/images/info.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/images/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/images/plusIcon.svg";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";

const overviewData = {
    overview: [
        { title: 'APY', value: '111.94%' },
        { title: 'Total staked', value: '1,850,791.55 LP' }
    ],
    myValue: [
        { title: 'Available', claim: false, value: '0.00 LP' },
        { title: 'Staked', claim: false, value: '0.00 LP' },
        { title: 'Rewards', claim: true, value: '0.00 $BAY' },
    ]

}

const Liquidity = () => {

    const [isPoolStake, setIsPoolStake] = useState(true);
    const [isProvidePool, setProvidePool] = useState(true);
    const [isMobileTab, setIsMobileTab] = useState(false);
    const [isShowOverviewData, setIsShowOverviewData] = useState(true);

    const handleResize = () => {
        setIsMobileTab(window.innerWidth <= 850);
        setIsShowOverviewData(window.innerWidth >= 850)
    }

    useEffect(() => {
        handleResize();
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => handleResize());
        return window.removeEventListener("resize", () => handleResize());
    }, []);


    const handleStake = (value: boolean) => {
        setIsPoolStake(value);
    }
    const handleProvidePool = (value: boolean) => {
        setProvidePool(value);
    }

    const handleOverviewData = () => {
        setIsShowOverviewData((prev) => !prev);
    }

    return (
        <div className={` mt-5  ${Style.container} mb-5`}>

            <h5 className={Style.title}>
                $BAY-UST Liquidity
            </h5>
            <p className={Style.description}>
                Input equal amounts of $BAY and $UST to add liquidity into our pool to earn rewards.
            </p>
            <div className={`${Style.flexBox} d-flex`}>
                <div className={Style.formBox}>
                    <div className={Style.form}>
                        <div className={`d-flex ${Style.btnContainer}`}>
                            <button onClick={() => handleStake(true)} className={`${Style.btn} ${isPoolStake ? Style.selectedBtn : ''}`}>
                                Pool
                            </button>
                            <button onClick={() => handleStake(false)} className={`${Style.btn} ${!isPoolStake ? Style.selectedBtn : ''}`}>
                                Staking
                            </button>
                        </div>
                        <div className={Style.formContainer}>
                            <div className={`d-flex ${Style.providalbtnContainer}`}>
                                <button onClick={() => handleProvidePool(true)} className={`${Style.btn} ${isProvidePool ? Style.selectedBtn : ''}`}>
                                    {
                                        isPoolStake ? 'Provide' : 'Stake'
                                    }
                                </button>
                                <button onClick={() => handleProvidePool(false)} className={`${Style.btn} ${!isProvidePool ? Style.selectedBtn : ''}`}>
                                    {
                                        isPoolStake ? 'Withdraw' : 'Unstake'
                                    }

                                </button>
                            </div>
                            {
                                (isPoolStake && isProvidePool) &&
                                <form >
                                    <div className="align-items-center d-flex">
                                        <div className="flex-1">
                                            <label className={Style.title}>Input $BAY</label>
                                            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                                                <input className="ms-3" placeholder='0.00' />
                                            </div>
                                            <div className={`mt-2 d-flex justify-content-end`}>
                                                <span className={Style.luartAvaibleText}> 0.00 $BAY Available</span>
                                            </div>
                                        </div>
                                        <div className="mx-4 mt-4">
                                            <PlusIcon fill="rgba(255, 255, 255, 0.52)" />
                                        </div>
                                        <div className="flex-1">
                                            <label className={Style.title}>Input $BAY</label>
                                            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                                                <input className="ms-3" placeholder='0.00' />
                                            </div>
                                            <div className={`mt-2 d-flex justify-content-end`}>
                                                <span className={Style.luartAvaibleText}> 0.00 $BAY Available</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className={Style.title}>
                                        $BAY-UST LP
                                    </h5>
                                    <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                                        <label>LP</label>
                                        <input className="ms-3" placeholder='0.00' />
                                    </div>
                                    <button className={`${Style.submitBtn}`} type="button">Connect Wallet</button>
                                    {/* {
                                    isPoolStake &&
                                    <div className={`d-flex align-items-center ${Style.unboundingPeriod}`}>
                                        <InfoIcon height={20} fill="rgb(34, 138, 237)" /> <span className={`ms-2 ${Style.title}`}> Unbounding Period - 5 Days</span>
                                    </div>
                                } */}
                                </form>
                            }
                            {
                                (isPoolStake && !isProvidePool) &&
                                <Withdraw />
                            }
                            {
                                (!isPoolStake && isProvidePool) &&
                                <Stake />
                            }
                            {
                                (!isPoolStake && !isProvidePool) &&
                                <Unstake />
                            }
                        </div>
                    </div>
                </div>
                <div className={Style.overview}>
                    <div className={Style.overviewContainer}>
                        <div className={`d-flex justify-content-between ${isShowOverviewData && isMobileTab ? 'mb-4' : ''}`}>
                            <h6 className={`${Style.title}`}>Overview</h6>
                            {
                                isMobileTab &&
                                <span onClick={handleOverviewData}>
                                    {!isShowOverviewData ?
                                        <ArrowDownIcon /> :
                                        <ArrowUpwardIcon className={Style.upIcon} />
                                    }
                                </span>
                            }
                        </div>
                        {
                            isShowOverviewData &&
                            <>
                                <div>
                                    {overviewData.overview.map((item) => {
                                        return (
                                            <div className={`d-flex justify-content-between ${Style.overviewBox}`}>
                                                <span className={`${Style.title}`}>
                                                    {item.title}
                                                </span>
                                                <span className={`${Style.value}`}>
                                                    {item.value}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h6 className={`${Style.title} ${Style.myValue}`}>My Value</h6>
                                <div>
                                    {overviewData.myValue.map((item) => {
                                        return (
                                            <div className={`d-flex justify-content-between ${Style.overviewBox}`}>
                                                <span className={`${Style.title}`}>
                                                    {item.title}
                                                    {
                                                        item.claim &&
                                                        <span className={`${Style.claim}`}>
                                                            Claim
                                                        </span>
                                                    }
                                                </span>
                                                <span className={`${Style.value}`}>
                                                    {item.value}
                                                </span>
                                            </div>
                                        )
                                    })}
                                    <span className={Style.claimCommission}>*Claim commission is 1 $UST</span>
                                    <div>
                                        <button className={Style.liquidityBtn}>
                                            Single Asset Staking
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div >

        </div >

    );
}
export default Liquidity;

const Withdraw = () => {
    return (
        <form >
            <h5 className={Style.title}>
                $BAY-UST LP
            </h5>
            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                <label>LP</label>
                <input className="ms-3" placeholder='0.00' />
            </div>
            <div className={`mt-2 d-flex justify-content-end`}>
                <span className={Style.luartAvaibleText}> 0.00 $BAY Available</span>
            </div>
            <div className="align-items-center d-flex mt-4">
                <div className="flex-1">
                    <label className={Style.title}>Implemented $BAY</label>
                    <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                        <input className="ms-3" placeholder='0.00' />
                    </div>
                </div>
                <div className="mx-4 mt-4">
                    <PlusIcon fill="rgba(255, 255, 255, 0.52)" />
                </div>
                <div className="flex-1">
                    <label className={Style.title}>Implemented $UST</label>
                    <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                        <input className="ms-3" placeholder='0.00' />
                    </div>
                </div>
            </div>

            <button className={`${Style.submitBtn}`} type="button">Connect Wallet</button>
        </form>
    );
}

const Stake = () => {
    return (
        <form >
            <h5 className={Style.title}>
                $BAY-UST LP
            </h5>
            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                <label>LP</label>
                <input className="ms-3" placeholder='0.00' />
                <button>MAX</button>
            </div>
            <div className={`mt-2 d-flex justify-content-end`}>
                <span className={Style.luartAvaibleText}> 0.00 $BAY Available</span>
            </div>
            <button className={`${Style.submitBtn}`} type="button">Connect Wallet</button>
            <div className={`d-flex align-items-center ${Style.unboundingPeriod}`}>
                <InfoIcon height={20} fill="rgb(34, 138, 237)" /> <span className={`ms-2 ${Style.title}`}> Unbounding Period - 5 Days</span>
            </div>
        </form>
    )
}
const Unstake = () => {
    return (
        <form >
            <h5 className={Style.title}>
                $BAY-UST LP
            </h5>
            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                <label>LP</label>
                <input className="ms-3" placeholder='0.00' />
            </div>
            <div className={`mt-2 d-flex justify-content-end`}>
                <span className={Style.luartAvaibleText}> 0.00 $BAY Available</span>
            </div>
            <button className={`${Style.submitBtn}`} type="button">Connect Wallet</button>
        </form>
    )
}