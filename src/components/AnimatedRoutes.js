import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


import White from './White/White'
import Red from './Red/Red'
import Orange from './Orange/Orange';
import Blue from './Blue/Blue';
import Yellow from './Yellow/Yellow';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' Component={White} exact />
                    <Route path='/red' Component={Red} exact />
                    <Route path='/orange' Component={Orange} exact />
                    <Route path='/blue' Component={Blue} exact />
                    <Route path='/yellow' Component={Yellow} exact />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes
