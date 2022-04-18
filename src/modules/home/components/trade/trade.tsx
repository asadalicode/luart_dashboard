import Style from "./trade.module.scss";
import { ReactComponent as InfoIcon } from "../../../../assets/images/info.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/images/arrowDown.svg";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";

const overviewData = {
    overview: [
        { title: 'APY', value: '10.98%' },
        { title: 'Total staked', value: '11,871,134.01 $LUAR' }
    ],
    myValue: [
        { title: 'Available', claim: false, value: '0.00 $LUART' },
        { title: 'Staked', claim: false, value: '0.00 $LUART' },
        { title: 'Rewards', claim: true, value: '0.00 $LUART' },
    ]

}

const Trade = () => {

    const [isStake, setIstake] = useState(true);
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
        setIstake(value);
    }

    const handleOverviewData = () => {
        setIsShowOverviewData((prev) => !prev);
    }

    return (
        <div className={` mt-5  ${Style.container} mb-5`}>

            <h5 className={Style.title}>
                REDACTED.MONEY
            </h5>
            <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing  quis nostrud
            </p>
            <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing  quis nostrud   Lorem ipsum dolor sit amet, consectetur adipiscing  quis nostrud
            </p>
            <p className={`${Style.description}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing  quis nostrud
            </p>
            <div className={`${Style.flexBox} d-flex`}>
                <div className={Style.formBox}>
                    <div className={Style.form}>
                        <div className={`d-flex ${Style.btnContainer}`}>
                            <button onClick={() => handleStake(true)} className={`${Style.btn} ${isStake ? Style.selectedBtn : ''}`}>
                                THE BLADE
                            </button>
                            <button onClick={() => handleStake(false)} className={`${Style.btn} ${!isStake ? Style.selectedBtn : ''}`}>
                                SOON
                            </button>
                        </div>
                        <form className={Style.formContainer}>
                            <h5 className={Style.title}>
                                {
                                    isStake ? 'AMOUNT' : 'WITHDRAWN'
                                }
                            </h5>
                            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                                <label>$UST</label>
                                <input className="ms-3" placeholder='0.00' />
                            </div>
                            <div className={`mt-2 d-flex justify-content-end`}>
                                <span className={Style.luartAvaibleText}> 0.00 $LUART Available</span>
                            </div>
                            <h5 className={Style.title}>
                                RECEIVER ADDRESS
                            </h5>
                            <div className={`d-flex align-items-center ${Style.despositInputContainer}`}>
                                <input className="ms-3" placeholder='Receier address' />
                            </div>

                            <button className={`${Style.submitBtn}`} type="button">REDACT</button>
                            {/* {
                                isStake &&
                                <div className={`d-flex align-items-center ${Style.unboundingPeriod}`}>
                                    <InfoIcon height={20} fill="rgb(34, 138, 237)" /> <span className={`ms-2 ${Style.title}`}> Unbounding Period - 5 Days</span>
                                </div>
                            } */}
                        </form>
                    </div>
                </div>
                <div className={Style.overview}>
                    <div className={Style.overviewContainer}>
                        {/* <div className={`d-flex justify-content-between ${(isShowOverviewData && isMobileTab) ? 'mb-4' : ''}`}>
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
                        </div> */}
                        <div className={`${Style.overviewBox}`}>
                            <h5 className={`${Style.title}`}>
                                Stats
                            </h5>
                            <h5 className={`${Style.title}`}>
                                *FEES
                            </h5>
                            <h5 className={`${Style.title}`}>
                                MORE STATS HERE...
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}
export default Trade;