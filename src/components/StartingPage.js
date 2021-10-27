import React from "react";
import "./home.css"
import { useHistory } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import cyduck from "./circle-cropped2.png"

import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import m from "./Drop-it.mp4"
import TwitterIcon from '@material-ui/icons/Twitter';
import TypeWriter from 'react-typewriter';

import "animate.css"

// import { Animated } from "react-animated-css";



function StartingPage() {


    var tkn = localStorage.getItem('usertoken');
    console.log(tkn)
    let history = useHistory();


    function gotofile(event) {
        event.preventDefault()

        history.push("/file")
    }

    function gotosign(event) {
        event.preventDefault()
        history.push("/signin")
    }

    return (
        <div className="homediv" >

            <div className="box">



                <div className="writer">


                    <h2 style={{ fontSize: "90px" }}>CyDuck</h2>




                    <div className="cyduck_bio">
                        {/* <h2>We ensure easy clarifications</h2> */}
                        <p className="cyduck_desc">Cyduck is a developer community to exchange your doubts and thoughts over various challenges and queries on programming along with some monetary benefits.</p>
                    </div>
                    <form action="" method="get">
                        {tkn === null ? <a className="strlinks" href="/signin"  >Get Started</a> : null}
                        {tkn !== null ? <a className="strlinks" style={{ paddingLeft: "13px" }} href="/community">Answer Question</a> : <a className="strlinks2" style={{ paddingLeft: "13px", paddingTop: "10px" }} href="/community">Answer Questions</a>}

                    </form>

                    <a className="strlinks try" href="/file" >Ask Question</a>
                </div>


                {/* <video className="intro_video" controls="play pause" /> */}
            </div>

            <div className="about-us">

                <ScrollAnimation animateIn="fadeInLeft">
                    <h2>What do we do?</h2>


                    <div className="about-content">
                        <img src={cyduck} alt="" />
                        <h4>We allow users to post their doubts on our platform using different mediums for free or by paying.<p>then other users can answer their question, and redeem the amount paid by the user</p></h4>

                    </div>


                </ScrollAnimation>



            </div>

            {/* <div className="payment">
                <ScrollAnimation animateIn="fadeInLeft"  >
                    <h2>Payment Scheme</h2>

                    <div className="paymentcontain">

                        <div className="payment-box">
                            <div className="icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
                            <div className="content">
                                <h3>Free</h3>
                                <p>You can ask your question for free without any time frame</p>

                            </div>


                        </div>
                        <div className="payment-box">
                            <div className="icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
                            <div className="content">
                                <h3> 3 /6hr</h3>
                                <p>For Rs. 3 you can get answer to your question within 6 hours </p>

                            </div>


                        </div>
                        <div className="payment-box">

                            <div className="content">
                                <h3> 5 /3hr</h3>
                                <p>For Rs. 5 you can get answer to your question within 3 hours</p>

                            </div>
                        </div>
                        <div className="payment-box">

                            <div className="content">
                                <h3> 10 /1hr</h3>
                                <p>For Rs. 10 you can get answer to your question within 1 hour</p>

                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div> */}



            <section id="Contact">
                <div className="footer">
                    <div className="footer-basic">
                        <footer>
                            <div className="footer-left">
                                <div className="addf">
                                    <p className="fhead">Visit Us: </p>
                                    <p className="fintro">Plot no. 69, Sector-32,
                                        <br />Gurugram, Haryana-122022</p></div>
                                <div className="addf"> <p className="fhead">Contact Us: </p>
                                    <p className="fintro">+91-9555418627</p></div>
                                <div className="addf"><p className="fhead">Email Us:</p>
                                    <p className="fintro">cyduck1@gmail.com</p></div>
                            </div>

                            <div className="footer-right">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#">Get in Touch</a></li>
                                </ul>
                                <div className="social">
                                    <a href="https://t.me/joinchat/xrbUyk1degk5OTll" target="_blank"><i className="icon ion-social-instagram" ><TelegramIcon /></i></a>
                                    <a href="https://www.linkedin.com/company/cyduck/" target="_blank"><i className="icon ion-social-youtube-outline" ><LinkedInIcon /></i></a>
                                    <a ><i className="icon ion-social-twitter" ></i><TwitterIcon /></a>
                                    <a href="#" href="https://discord.gg/XJNPaF4b" target="_blank">D</a>
                                </div>
                            </div>
                            <p className="copyright">Company Name  Cyduck © 2021</p>
                        </footer>
                    </div>


                </div>

            </section>
        </div>
    )
}



export default StartingPage
