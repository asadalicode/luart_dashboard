import Style from './footer.module.scss';
import footerLogo from '../../../../assets/images/footerLogo.svg';

const Footer = () => {
    return (
        <footer id="footer" className={Style.footer}>
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className={`col-xs-12 col-sm-6 col-md-3 ${Style.footerSubContainer}`}>
                            <div className="widget subscribe no-box">
                                <h5 className={`${Style.widgetTitle} ${Style.removeBorder}`}>Get the latest Luart updates<span></span></h5>
                                <div className={`${Style.emailInputContainer}`}>
                                    <input placeholder='Enter Email' />
                                    <button>Sign up</button>
                                </div>
                                <div className={`${Style.agreements} d-flex cursor-pointer mt-3`}>
                                    <div className={Style.checkBoxContainer}>
                                        <input type={"checkbox"} />
                                        <span className={`${Style.greenmark}`}></span>
                                    </div>
                                    <p>
                                        I agree to the processing of personal data by Luart for marketing purposes and accept <u> Terms of Service</u>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={`col-xs-12 col-sm-6 col-md-3 ${Style.footerSubContainer}`}>
                            <div className="widget no-box">
                                <h5 className={`${Style.widgetTitle}`}>Apply to Launch NFTs<span></span></h5>
                                <p className={Style.description}>
                                    <u>Apply today</u>  to launch or list your
                                    NFT project on Luart's launchpad
                                    and/or marketplace. We're taking
                                    a curated approach to project
                                    listings on our launchpad.
                                </p>
                            </div>
                        </div>

                        <div className={`col-xs-12 col-sm-6 col-md-3 ${Style.footerSubContainer}`}>
                            <h5 className={`${Style.widgetTitle}`}>Platform Luart.io<span></span></h5>
                            <ul className={Style.socialList}>
                                <li >NFT Launchpad</li>
                                <li >NFT Marketplace</li>
                                <li >App $LUART</li>
                                <li >Website</li>
                            </ul>
                        </div>

                        <div className={`col-xs-12 col-sm-6 col-md-3 ${Style.footerSubContainer} mb-0   `}>

                            <div className="widget no-box">
                                <h5 className={`${Style.widgetTitle}`}>Social Media<span></span></h5>
                                <ul className={Style.socialList}>
                                    <li >Telegram</li>
                                    <li >Twitter</li>
                                    <li >Medium</li>
                                    <li >Discord</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`${Style.footerCopyright}`}>
                <div className="container">
                    <div className={`d-flex align-items-center justify-content-between ${Style.footerBottomContainer}`}>
                        <div className={`d-flex ${Style.leftPortion}`}>
                            <img src={footerLogo} />
                            <span>Copyright Luart 2022. All Rights Reserved.</span>
                        </div>
                        <div className={Style.rightPortion}>
                            <ul className={Style.list}>
                                <li>Terms</li>
                                <li>Privacy Policy</li>
                                <li>Price & Fees</li>
                                <li>Download Branding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;