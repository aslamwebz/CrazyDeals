import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div>
            <div className="pre-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>About us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip  commodo consequat. </p>
                            <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>Information</h2>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right"></i> <a href="/">Delivery Information</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="/">Customer Service</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="/">Order Tracking</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="/">Shipping &amp; Returns</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="contacts.html">Contact Us</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="/">Careers</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="/">Payment Methods</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2 className="margin-bottom-0">Latest Tweets</h2>
                            <a className="twitter-timeline" href="https://twitter.com/twitterapi" data-tweet-limit="2" data-theme="dark" data-link-color="#57C8EB" data-widget-id="455411516829736961" data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by </a>
                        </div>

                        <div className="col-md-3 col-sm-6 pre-footer-col">
                            <h2>Our Contacts</h2>
                            <div className="margin-bottom-40">
                                35, Lorem Lis Street, Park Ave<br />
                                California, US<br />
                                Phone: 300 323 3456<br />
                                Fax: 300 323 1456<br />
                                Email: <a href="mailto:info@metronic.com">info@metronic.com</a><br />
                                Skype: <a href="skype:metronic">metronic</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="social-buttons">
                                <a href="#" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                                    <span className="social-button__inner">
                                        <i className="fab fa-facebook-f"></i>
                                    </span>
                                </a>
                                <a href="#" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                                    <span className="social-button__inner">
                                        <i className="fab fa-linkedin-in"></i>
                                    </span>
                                </a>
                                <a href="#" className="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
                                    <span className="social-button__inner">
                                        <i className="fab fa-snapchat-ghost"></i>
                                    </span>
                                </a>
                                <a href="#" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                                    <span className="social-button__inner">
                                        <i className="fab fa-github"></i>
                                    </span>
                                </a>
                                <a href="#" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                                    <span className="social-button__inner">
                                        <i className="fab fa-codepen"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="pre-footer-subscribe-box pull-right">
                                <h2>Newsletter</h2>
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" placeholder="youremail@mail.com" className="form-control" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="submit">Subscribe</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
