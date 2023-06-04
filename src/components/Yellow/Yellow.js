import React, { useEffect } from 'react';
import './Yellow.css'
import Tilt from 'react-vanilla-tilt'
import { Link } from 'react-router-dom';

import Logo from '../Yellow/Images/logo.svg'
import white from '../Yellow/Images/white.svg'
import orange from '../Yellow/Images/orange.svg'
import blue from '../Yellow/Images/blue.svg'
import red from '../Yellow/Images/red.svg'
import yellow from '../Yellow/Images/yellow.svg'
import Bg from '../Yellow/Images/white-bg.svg'

import T1 from '../Yellow/Images/T1-blue.svg'
import T2 from '../Yellow/Images/T2-blue.svg'
import T3 from '../Yellow/Images/T3-blue.svg'
import T4 from '../Yellow/Images/T4-blue.svg'
import T5 from '../Yellow/Images/T5-blue.svg'
import shoe1 from '../Yellow/Images/shoe1.svg'
import shoe2 from '../Yellow/Images/shoe2.svg'
import shoe3 from '../Yellow/Images/shoe3.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

import { FaInstagram, FaFacebook, FaYoutube, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

import { motion } from 'framer-motion'


const Yellow = () => {

    useEffect(() => {
        const btnEL = document.querySelector('.yellow-btn');

        btnEL.addEventListener('mouseover', (event) => {
            const y = (event.pageY - btnEL.offsetTop);
            const x = (event.pageX - btnEL.offsetLeft);

            btnEL.style.setProperty('--xPos', x + 'px');
            btnEL.style.setProperty('--yPos', y + 'px');
        });
    })
    return (
        <>
           <motion.div style={{
            backgroundColor: '#FFCB05',
            position: 'relative',
            zIndex: 2,
            overflowX: 'hidden',
           }}

           initial={{opacity: 0, }}
           animate={{opacity: 1, scale:1}}
           exit={{opacity: 0, x: 200}}
           transition={{duration: 0.5}}
           >

                {/* Navbar  section*/}
                <div className='yellow-upper-navbar'>
                <p>Help</p>
                <span></span>
                <p>Join us</p>
                <span></span>
                <p>Sign in</p>   
                </div>

                <div className='yellow-navbar'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                    <ul className='yellow-links'>
                        <li>New & Features</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                    <ul className='yellow-login'>
                        <li><a href='#'>Login</a></li>
                        <li><button className='yellow-btn'><span>Shop Now</span></button></li>
                    </ul>
                </div>

                {/*  Header* section */}

                <div className='yellow-header section__padding'>
                    <div className='yellow-heading'>
                        <h1>Run <span>With</span> Ego</h1>
                        <button className='yellow-heading-btn'>Shop Now</button>
                        <div className='yellow-image-color'>
                            <ul>
                                <li><Link to='/'><img src={white} alt='' /></Link></li>
                                <li><Link to='/yellow'><img src={orange} alt='' /></Link></li>
                                <li><Link to='/red'><img src={red} alt='' /></Link></li>
                                <li><Link to='/blue'><img src={blue} alt='' /></Link></li>
                                <li><Link to='/yellow'><img src={yellow} alt='' /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='yellow-header-image'>
                        <a href=''><img src={yellow} alt='' /></a>
                    </div>
                </div>

                {/* Testimonials section */}


                <div className='yellow-review'>
                    <div className='yellow-review-heading'>
                        <span></span>
                        <h1>Customer Review </h1>
                        <span></span>
                    </div>
                </div>
                <div className='yellow-container'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }}
                        pagination={{ el: '.yellow-swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.yellow-swiper-button-next',
                            prevEl: '.yellow-swiper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='yellow-swiper_container'

                    >
                        <SwiperSlide className='yellow-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='yellow-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T2} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='yellow-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T3} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='yellow-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T4} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='yellow-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T5} alt='' />
                        </SwiperSlide>

                        <div className='yellow-slider-controler'>
                            <div className='yellow-swiper-button-prev slider-arrow'>
                                <FaAngleLeft />
                            </div>
                            <div className='yellow-swiper-pagination' style={{
                                position: 'relative',
                                zIndex: '0'
                            }}></div>
                            <div className='yellow-swiper-button-next slider-arrow'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </Swiper>
                </div>

                {/* bg image */}

                <img src={Bg} alt='' className='yellow-bg-shoe' />

                {/* CTA section */}

                <div className='yellow-cta'>
                    <div className='yellow-cta-section section__padding'>
                        <p>Festival Essential </p>
                        <h1>CHASE THE DREAM</h1>
                        <h3>Move. Explore. Bring your boldest.Get after summer’s endless possibilities with ready-for-anything fits</h3>
                        <button className='yellow-cta-btn'>Shop Now</button>
                    </div>
                    <hr />
                </div>

                {/* Product section */}

                <div className='yellow-products'>
                    <div className='yellow-product-heading'>
                        <span></span>
                        <h1>Our Products</h1>
                        <span></span>
                    </div>
                </div>

                <div className='yellow-container'>
                    <Tilt options={{ max: 50, speed: 400, }} className='yellow-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='yellow-name'>AIR MAX</h2>
                        <a href='' className='yellow-buy'>₹6,999</a>
                        <div className='yellow-circle'></div>
                        <img src={shoe1} alt='' className='yellow-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='yellow-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='yellow-name'>CLOUD ONE</h2>
                        <a href='' className='yellow-buy'>₹4,500</a>
                        <div className='yellow-circle'></div>
                        <img src={shoe2} alt='' className='yellow-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='yellow-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='yellow-name'>SPY AIR</h2>
                        <a href='' className='yellow-buy'>₹3,999</a>
                        <div className='yellow-circle'></div>
                        <img src={shoe3} alt='' className='yellow-product' />
                    </Tilt>
                </div>

                {/* Footer section */}

                <div className='yellow-footer'>
                    <div className='yellow-sb__footer section__padding'>
                        <div className='yellow-sb__footer-links'>
                            <div className='yellow-sb__footer-links-div'>
                                <h4>OUR STORE</h4>
                                <h4>BECOME A MEMBER</h4>
                                <h4>EMAIL</h4>
                                <h4>DISCOUNT</h4>
                            </div>
                            <div className='yellow-sb__footer-links-div'>
                                <h4>Get Help</h4>
                                <a href=''><p>Order Status</p></a>
                                <a href=''><p>Delivery </p></a>
                                <a href=''><p>Returns</p></a>
                                <a href=''><p>Payment option </p></a>
                                <a href=''><p>Contact us</p></a>
                            </div>
                            <div className='yellow-sb__footer-links-div'>
                                <h4>About us</h4>
                                <a href=''><p>News</p></a>
                                <a href=''><p>Careers</p></a>
                                <a href=''><p>Investors</p></a>
                                <a href=''><p>Sustainability</p></a>
                            </div>
                            <div className='yellow-sb__footer-links-div'>
                                <h4>Coming on</h4>
                                <div className='yellow-socialmedia'>
                                    <a href=''><p><FaFacebook /></p></a>
                                    <a href=''><p><FaInstagram /></p></a>
                                    <a href=''><p><FaYoutube /></p></a>

                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className='yellow-sb__footer-below'>
                            <div className='yellow-sb__footer-copyright'>
                                <p>
                                    @{new Date().getFullYear()} Time-X Clothing.org
                                </p>
                            </div>
                            <div className='yellow-sb__footer-below-links'>
                                <a href=''><div><p>Terms & Conditions</p></div></a>
                                <a href=''><div><p>Privacy</p></div></a>
                                <a href=''><div><p>Security</p></div></a>
                                <a href=''><div><p>Cookie Declaration</p></div></a>
                            </div>
                        </div>
                    </div>
                </div>





                </motion.div>  
            </>
            )
}

            export default Yellow
