import React, { Component } from 'react'
import CarouselMain from './Sliders/CarouselMain'
import NewArrivals from './NewArrivals/NewArrivals'
import Sidebar from './Sidebar/Sidebar'
import ShowCards from './ShowCards/ShowCards'
import ShowCardsT from './ShowCards/ShowCardsT'
import Footer from './Footer/Footer'
import ItemSliderTech from './ItemSliders/ItemSliderTech'
import Hero from './Hero/Hero';

class CrazyDeal extends Component {

    render() {
        return (
            <div >
                <CarouselMain />
                <NewArrivals />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 col-sm-8">
                            <ShowCards />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <h3>Newest Tech</h3>
                    <ItemSliderTech />
                </div>
                <div className="container-fluid">
                    <h3>Popular Clothing</h3>
                    <ItemSliderTech />
                </div>
                <div className="container-fluid">
                    <Hero />
                </div>
                <h3>Great Deals In Mobile</h3>
                <div className="container-fluid">
                    <ShowCardsT />
                </div>
                <Footer />

            </div >
        )
    }
}

export default CrazyDeal