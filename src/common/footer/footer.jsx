import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='container grid2'>
        <div className='box'>
        <h1>Emedihome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
          <div className='icon d_flex'>
            <div className='img d_flex'>
              <i class='fa-brands fa-google-play'></i>
              <span>Google Play</span>
            </div>
            <div className='img d_flex'>
              <i class='fa-brands fa-app-store-ios'></i>
              <span>App Store</span>
            </div>
          </div>
        </div>

        <div className='box'>
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='box'>
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center </li>
            <li>How to Buy </li>
            <li>Track Your Order </li>
            <li>Corporate & Bulk Purchasing </li>
            <li>Returns & Refunds </li>
          </ul>
        </div>
        <div className='box'>
          <h2>Contact Us</h2>
          <ul>
            <li>851/A, 35th Main, Jai Maruthi Nagar, Nandini Layout, Bengaluru - 96 </li>
            <li>Email: ajithpoovanna40@gmail.com</li>
            <li>Phone: +91 9620064664</li>
          </ul>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer