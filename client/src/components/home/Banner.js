import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'

const Banner = () => {
    const data = [
        img1,img2, img3, img4, img5, img6, img7

       
    ]
  return (
    <Carousel className='carasousel'
    autoPlay={true}
    interval={4000}
    animation="slide"
    duration={1221}
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    

    >
        {
            data.map((imag, i)=>{
                return (
                    <>
                    <img src={imag} alt="" className='banner_img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner
// " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
// "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
// "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
// "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/MayART23/OnePlus/GW/10R/UGIG_IN_WLD_MayART23_OnePlus_10R_PC_Hero_3000x1200._CB589740106_.jpg",
// "https://m.media-amazon.com/images/I/61OCFjMW7lL._SX3000_.jpg",
// "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/mayart23/PC_MAIN/MA_3000._CB589301501_.jpg",
// "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Cons/MayART23/GW/X-GL/UnRec2_NonPEA_PC_3000._CB590875252_.jpg?q=50"