import React, { useEffect } from 'react';
import './Blue.css'
import Tilt from 'react-vanilla-tilt'
import { Link } from 'react-router-dom';

import Logo from '../Blue/Images/logo.svg'
import white from '../Blue/Images/white.svg'
import orange from '../Blue/Images/orange.svg'
import blue from '../Blue/Images/blue.svg'
import red from '../Blue/Images/red.svg'
import yellow from '../Blue/Images/yellow.svg'
import Bg from '../Blue/Images/white-bg.svg'

import T1 from '../Blue/Images/T1-blue.svg'
import T2 from '../Blue/Images/T2-blue.svg'
import T3 from '../Blue/Images/T3-blue.svg'
import T4 from '../Blue/Images/T4-blue.svg'
import T5 from '../Blue/Images/T5-blue.svg'
import shoe1 from '../Blue/Images/shoe1.svg'
import shoe2 from '../Blue/Images/shoe2.svg'
import shoe3 from '../Blue/Images/shoe3.svg'

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


const Blue = () => {

    useEffect(() => {
        const btnEL = document.querySelector('.blue-btn');

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
            backgroundColor: '#313366',
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
                <div className='blue-upper-navbar'>
                <p>Help</p>
                <span></span>
                <p>Join us</p>
                <span></span>
                <p>Sign in</p>   
                </div>


                <div className='blue-navbar'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                    <ul className='blue-links'>
                        <li>New & Features</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                    <ul className='blue-login'>
                        <li><a href='#'>Login</a></li>
                        <li><button className='blue-btn'><span>Shop Now</span></button></li>
                    </ul>
                </div>

                {/*  Header* section */}

                <div className='blue-header section__padding'>
                    <div className='blue-heading'>
                        <h1>Run <span>With</span> Ego</h1>
                        <button className='blue-heading-btn'>Shop Now</button>
                        <div className='blue-image-color'>
                            <ul>
                                <li><Link to='/'><img src={white} alt='' /></Link></li>
                                <li><Link to='/orange'><img src={orange} alt='' /></Link></li>
                                <li><Link to='/red'><img src={red} alt='' /></Link></li>
                                <li><Link to='/blue'><img src={blue} alt='' /></Link></li>
                                <li><Link to='/yellow'><img src={yellow} alt='' /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='blue-header-image'>
                        <a href=''><img src={blue} alt='' /></a>
                    </div>
                </div>

                {/* Testimonials section */}


                <div className='blue-review'>
                    <div className='blue-review-heading'>
                        <span></span>
                        <h1>Customer Review </h1>
                        <span></span>
                    </div>
                </div>
                <div className='blue-container'>
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
                        pagination={{ el: '.blue-swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.blue-swiper-button-next',
                            prevEl: '.blue-swiper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='blue-swiper_container'

                    >
                        <SwiperSlide className='blue-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='blue-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T2} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='blue-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T3} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='blue-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T4} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='blue-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T5} alt='' />
                        </SwiperSlide>

                        <div className='blue-slider-controler'>
                            <div className='blue-swiper-button-prev slider-arrow'>
                                <FaAngleLeft />
                            </div>
                            <div className='blue-swiper-pagination' style={{
                                position: 'relative',
                                zIndex: '0'
                            }}></div>
                            <div className='blue-swiper-button-next slider-arrow'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </Swiper>
                </div>

                {/* bg image */}

                <img src={Bg} alt='' className='blue-bg-shoe' />

                {/* CTA section */}

                <div className='blue-cta'>
                    <div className='blue-cta-section section__padding'>
                        <p>Festival Essential </p>
                        <h1>CHASE THE DREAM</h1>
                        <h3>Move. Explore. Bring your boldest.Get after summer’s endless possibilities with ready-for-anything fits</h3>
                        <button className='blue-cta-btn'>Shop Now</button>
                    </div>
                    <hr />
                </div>

                {/* Product section */}

                <div className='blue-products'>
                    <div className='blue-product-heading'>
                        <span></span>
                        <h1>Our Products</h1>
                        <span></span>
                    </div>
                </div>

                <div className='blue-container'>
                    <Tilt options={{ max: 50, speed: 400, }} className='blue-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='blue-name'>AIR MAX</h2>
                        <a href='' className='blue-buy'>₹6,999</a>
                        <div className='blue-circle'></div>
                        <img src={shoe1} alt='' className='blue-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='blue-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='blue-name'>CLOUD ONE</h2>
                        <a href='' className='blue-buy'>₹4,500</a>
                        <div className='blue-circle'></div>
                        <img src={shoe2} alt='' className='blue-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='blue-box' style={{
                        background: 'white',
                        borderRadius: '40px'
                    }}>
                        <h2 className='blue-name'>SPY AIR</h2>
                        <a href='' className='blue-buy'>₹3,999</a>
                        <div className='blue-circle'></div>
                        <img src={shoe3} alt='' className='blue-product' />
                    </Tilt>
                </div>

                {/* Footer section */}

                <div className='blue-footer'>
                    <div className='blue-sb__footer section__padding'>
                        <div className='blue-sb__footer-links'>
                            <div className='blue-sb__footer-links-div'>
                                <h4>OUR STORE</h4>
                                <h4>BECOME A MEMBER</h4>
                                <h4>EMAIL</h4>
                                <h4>DISCOUNT</h4>
                            </div>
                            <div className='blue-sb__footer-links-div'>
                                <h4>Get Help</h4>
                                <a href=''><p>Order Status</p></a>
                                <a href=''><p>Delivery </p></a>
                                <a href=''><p>Returns</p></a>
                                <a href=''><p>Payment option </p></a>
                                <a href=''><p>Contact us</p></a>
                            </div>
                            <div className='blue-sb__footer-links-div'>
                                <h4>About us</h4>
                                <a href=''><p>News</p></a>
                                <a href=''><p>Careers</p></a>
                                <a href=''><p>Investors</p></a>
                                <a href=''><p>Sustainability</p></a>
                            </div>
                            <div className='blue-sb__footer-links-div'>
                                <h4>Coming on</h4>
                                <div className='blue-socialmedia'>
                                    <a href=''><p><FaFacebook /></p></a>
                                    <a href=''><p><FaInstagram /></p></a>
                                    <a href=''><p><FaYoutube /></p></a>

                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className='blue-sb__footer-below'>
                            <div className='blue-sb__footer-copyright'>
                                <p>
                                    @{new Date().getFullYear()} Time-X Clothing.org
                                </p>
                            </div>
                            <div className='blue-sb__footer-below-links'>
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

            export default Blue
