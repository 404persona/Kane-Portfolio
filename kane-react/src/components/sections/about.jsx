import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Anas Ahmad</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Let's Connect</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="#"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="#"><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/anasahmad-full-stack-developer/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/anastanvir"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Anas Ahmad, <span>Full Stack Developer</span> and Digital Marketer
                                    Based in Lahore, Pakistan.
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Custom Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> CMS Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Branding Identity</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Digital Marketing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> SEO</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> AI Automation</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About