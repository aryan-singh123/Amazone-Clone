import React from 'react'
import './Header.css'




function Header() {
  return (
    <div className='header'>
      <div className="header_one">
      <a href='/'>
         <img className="header_logo"
           src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
         /></a>
         <button className='geolocation_button'>
            <div className='header_geoLocation'>
             <i class="fa-solid fa-location-dot  location_icon"></i>
             <div className='header_option'>
               <span className='header_optionLineIconOne'>Diliver to</span>
               <span className='header_optionLineIconTwo'>Faridabad 121009</span>
             </div>
            </div>
          </button>
           <div className="header_search">


           {/* <label for="cars">Choose a car:</label> */}
<select  className='catergries'name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>








          <input className="header_searchInput" type="text" />
        <button> <i class="fa-solid fa-magnifying-glass  header_searchIcon"></i></button>
        {/* <i class="fa-solid fa-magnifying-glass  header_searchIcon"></i> */}
         </div>
         <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">
            Hello
          </span>
          <span className="header_optionLineTwo">
            Sign in
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            Returns
          </span>
          <span className="header_optionLineTwo">
            & Orders
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            Your
          </span>
          <span className="header_optionLineTwo">
            Prime
          </span>
        </div>
        <div className="header_optionBasket">
          <a href='/checkout'>
            <i class="fa-solid fa-cart-shopping headerOptionCart"></i>
          </a>
        </div>
     </div>
     
    </div>

    {/* <div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div> 
/ </div>  */}





    </div>




    // chaat gpt code


//     <header>
//     <nav class="navbar">
//         <div class="nav-logo">
//             <a href="#"><img src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="Amazon Logo"/></a>
//         </div>
//         <div class="address">
//             <a href="#" class="deliver">Deliver</a>
            
//             <i class="fa-solid fa-location-dot  "></i>
            
//             <div class="map-icon">
//                 <span class="material-symbols-outlined">location_on</span>
//                 <a href="#" class="location">Nepal</a>
//             </div>
//         </div>
//         <div class="nav-search">
//             <select class="select-search">
//                 <option>All</option>
//                 <option>All Categories</option>
//                 <option>Amazon Devices</option>
//             </select>
//             <input type="text" placeholder="Search Amazon" class="search-input"/>
//             <div class="search-icon">
//                 <span class="material-symbols-outlined">search</span>
//             </div>
//         </div>
//         <div class="sign-in">
//             <a href="#">
//                 <p>Hello, sign in</p>
//                 <span>Account & Lists</span>
//             </a>
//         </div>
//         <div class="returns">
//             <a href="#">
//                 <p>Returns</p>
//                 <span>& Orders</span>
//             </a>
//         </div>
//         <div class="cart">
//             <a href="#">
//                 <span class="material-symbols-outlined cart-icon">shopping_cart</span>
                
//             </a>
//         </div>
//     </nav>
// </header>


  )
}

export default Header


