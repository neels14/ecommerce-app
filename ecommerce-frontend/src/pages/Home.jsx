import React from 'react'
import Banner from '../comps/Banner'
import CarouselDisplay from '../comps/CarouselDisplay'
import Categories from '../comps/Categories'
import Navbar from '../comps/Navbar'
import Products from '../comps/Products'
import Footer from '../comps/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <CarouselDisplay />
            <Categories />
            <Products />
            <Footer />
        </div>
        
    )
}

export default Home