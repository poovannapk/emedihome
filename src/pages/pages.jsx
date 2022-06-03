import React from 'react'
import Home from '../components/mainpage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shops/Shop'
import Announcement from '../components/annocument/Annocument'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <div><Home CartItem={CartItem}/>
    <FlashDeals productItems={productItems} addToCart={addToCart}/>
    <TopCate />
    <Discount />
    <NewArrivals />
    <Announcement />
    <Wrapper />
    </div>
  )
}

export default Pages