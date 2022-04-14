import Style from "./staking.module.scss";

const Staking = () => {
    return (
        <div className={` mt-5  ${Style.container}`}>

            <h5 className={Style.title}>
                Staking $LUART
            </h5>
            <p className={Style.description}>
                Stake your $LUART tokens for an annual percentage yield (APY).
            </p>
            <div className={`${Style.flexBox} d-flex`}>
                <div className={Style.form}>
                    <div className={`d-flex ${Style.btnContainer}`}>
                        <button className={`${Style.btn} ${Style.selectedBtn}`}>Stake</button>
                        <button className={Style.btn}>Unstake</button>
                    </div>
                </div>
                <div className={Style.overview}>

                </div>
            </div>

        </div>

    );
}
export default Staking;