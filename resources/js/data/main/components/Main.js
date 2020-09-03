import React from 'react'
import MainSlider from './MainSlider'
import SavePanel from './SavePanel'
import ShopNow from './ShopNow'
import BannerOne from './BannerOne'
import FeaturedOne from './Featured/FeaturedOne'
import FeaturedTwo from './Featured/FeaturedTwo'
import FeaturedThree from './Featured/FeaturedThree'


const Main = () => {
    return (
        <div>
            <MainSlider />
            <FeaturedOne />
            <FeaturedTwo />
            <ShopNow />
            <FeaturedThree />
            <SavePanel />
            <BannerOne />
        </div>
    )
}



export default Main
