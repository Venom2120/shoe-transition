import React, { useEffect } from 'react';
import './White.css'
import Tilt from 'react-vanilla-tilt'
import { Link } from 'react-router-dom';

import Logo from '../White/Images/logo.svg'
import white from '../White/Images/white.svg'
import blue from '../White/Images/blue.svg'
import orange from '../White/Images/orange.svg'
import red from '../White/Images/red.svg'
import yellow from '../White/Images/yellow.svg'
import Bg from '../White/Images/white-bg.svg'

import T1 from '../White/Images/T1-white.svg'
import T2 from '../White/Images/T2-white.svg'
import T3 from '../White/Images/T3-white.svg'
import T4 from '../White/Images/T4-white.svg'
import T5 from '../White/Images/T5-white.svg'
import shoe1 from '../White/Images/shoe1.svg'
import shoe2 from '../White/Images/shoe2.svg'
import shoe3 from '../White/Images/shoe3.svg'

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

import { motion } from 'framer-motion'




const White = () => {

    useEffect(() => {
        const btnEL = document.querySelector('.white-btn');

        btnEL.addEventListener('mouseover', (event) => {
            const y = (event.pageY - btnEL.offsetTop);
            const x = (event.pageX - btnEL.offsetLeft);

            btnEL.style.setProperty('--xPos', x + 'px');
            btnEL.style.setProperty('--yPos', y + 'px');
        });
    })
    return (
        <>
           <motion.div
            style={{
            backgroundColor: '#C7CBCB',
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
                <div className='white-upper-navbar'>
                <p>Help</p>
                <span></span>
                <p>Join us</p>
                <span></span>
                <p>Sign in</p>   
                </div>

                <div className='white-navbar'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                    <ul className='white-links'>
                        <li>New & Features</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                    <ul className='white-login'>
                        <li><a href='#'>Login</a></li>
                        <li><button className='white-btn'><span>Shop Now</span></button></li>
                    </ul>
                </div>

                {/*  Header* section */}

                <div className='white-header section__padding'>
                    <div className='white-heading'>
                        <h1>Run <span>With</span> Ego</h1>
                        <button className='white-heading-btn'>Shop Now</button>
                        <div className='white-image-color'>
                            <ul>
                                <li><Link to='/'><img src={white} alt='' /></Link></li>
                                <li><Link to='/orange'><img src={orange} alt='' /></Link></li>
                                <li><Link to='/red'><img src={red} alt='' /></Link></li>
                                <li><Link to='/blue'><img src={blue} alt='' /></Link></li>
                                <li><Link to='/yellow'><img src={yellow} alt='' /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='white-header-image'>
                        <a href=''><img src={white} alt='' /></a>
                    </div>
                </div>

                {/* Testimonials section */}


                <div className='white-review'>
                    <div className='white-review-heading'>
                        <span></span>
                        <h1>Customer Review </h1>
                        <span></span>
                    </div>
                </div>
                <div className='white-container'>
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
                        pagination={{ el: '.white-swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.white-swiper-button-next',
                            prevEl: '.white-swiper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='white-swiper_container'

                    >
                        <SwiperSlide className='white-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='white-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T2} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='white-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T3} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='white-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T4} alt='' />
                        </SwiperSlide>
                        <SwiperSlide className='white-swiper-slide' style={{
                            width: '37rem',
                            height: '42rem',
                            position: 'relative'
                        }
                        }>
                            <img src={T5} alt='' />
                        </SwiperSlide>

                        <div className='white-slider-controler'>
                            <div className='white-swiper-button-prev slider-arrow'>
                                <FaAngleLeft />
                            </div>
                            <div className='white-swiper-pagination' style={{
                                position: 'relative',
                                zIndex: '0'
                            }}></div>
                            <div className='white-swiper-button-next slider-arrow'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </Swiper>
                </div>

                {/* bg image */}

                <img src={Bg} alt='' className='white-bg-shoe' />

                {/* CTA section */}

                <div className='white-cta'>
                    <div className='white-cta-section section__padding'>
                        <p>Festival Essential </p>
                        <h1>CHASE THE DREAM</h1>
                        <h3>Move. Explore. Bring your boldest.Get after summer’s endless possibilities with ready-for-anything fits</h3>
                        <button className='white-cta-btn'>Shop Now</button>
                    </div>
                    <hr />
                </div>

                {/* Product section */}

                <div className='white-products'>
                    <div className='white-product-heading'>
                        <span></span>
                        <h1>Our Products</h1>
                        <span></span>
                    </div>
                </div>

                <div className='white-container'>
                    <Tilt options={{ max: 50, speed: 400, }} className='white-box' style={{
                        background: '#293134',
                        borderRadius: '40px'
                    }}>
                        <h2 className='white-name'>AIR MAX</h2>
                        <a href='' className='white-buy'>₹6,999</a>
                        <div className='white-circle'></div>
                        <img src={shoe1} alt='' className='white-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='white-box' style={{
                        background: '#293134',
                        borderRadius: '40px'
                    }}>
                        <h2 className='white-name'>CLOUD ONE</h2>
                        <a href='' className='white-buy'>₹4,500</a>
                        <div className='white-circle'></div>
                        <img src={shoe2} alt='' className='white-product' />
                    </Tilt>
                    <Tilt options={{ max: 50, speed: 400 }} className='white-box' style={{
                        background: '#293134',
                        borderRadius: '40px'
                    }}>
                        <h2 className='white-name'>SPY AIR</h2>
                        <a href='' className='white-buy'>₹3,999</a>
                        <div className='white-circle'></div>
                        <img src={shoe3} alt='' className='white-product' />
                    </Tilt>
                </div>

                {/* Footer section */}

                <div className='white-footer'>
                    <div className='white-sb__footer section__padding'>
                        <div className='white-sb__footer-links'>
                            <div className='white-sb__footer-links-div'>
                                <h4>OUR STORE</h4>
                                <h4>BECOME A MEMBER</h4>
                                <h4>EMAIL</h4>
                                <h4>DISCOUNT</h4>
                            </div>
                            <div className='white-sb__footer-links-div'>
                                <h4>Get Help</h4>
                                <a href=''><p>Order Status</p></a>
                                <a href=''><p>Delivery </p></a>
                                <a href=''><p>Returns</p></a>
                                <a href=''><p>Payment option </p></a>
                                <a href=''><p>Contact us</p></a>
                            </div>
                            <div className='white-sb__footer-links-div'>
                                <h4>About us</h4>
                                <a href=''><p>News</p></a>
                                <a href=''><p>Careers</p></a>
                                <a href=''><p>Investors</p></a>
                                <a href=''><p>Sustainability</p></a>
                            </div>
                            <div className='white-sb__footer-links-div'>
                                <h4>Coming on</h4>
                                <div className='white-socialmedia'>
                                    <a href=''><p><FaFacebook /></p></a>
                                    <a href=''><p><FaInstagram /></p></a>
                                    <a href=''><p><FaYoutube /></p></a>

                                </div>
                            </div>
                        </div>

                        <hr></hr>

                        <div className='white-sb__footer-below'>
                            <div className='white-sb__footer-copyright'>
                                <p>
                                    @{new Date().getFullYear()} Time-X Clothing.org
                                </p>
                            </div>
                            <div className='white-sb__footer-below-links'>
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

            export default White
