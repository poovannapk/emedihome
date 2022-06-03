import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/emedihome.jpg";
import './header.css'

const Search = () => {
    window.addEventListener('scroll', function(){
        const search = document.querySelector('.search')
        search.classList.toggle('active', window.scrollY>100)
    })
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
         <img src={Logo} alt="logo" style={{height: '35px', width: '180px'}} />
        </div>
        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search Products" />
          <span>All Categories</span>
        </div>
        <div className="icon f_flex width">
          <i className="fa fa-user icon-circle"></i>
          <div className="cart">
            <Link to="/">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
