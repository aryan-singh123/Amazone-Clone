import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
            <img 
            className="home_image"
            src="https://static.tnn.in/thumb/msid-107908231,thumbsize-134322,width-1280,height-720,resizemode-75/107908231.jpg"
            // src="https://images-eu.ssl-images-amazon.com/images/G/3…Rakshak/PC_Hero/S2_3000x1200_V2._CB581177837_.jpg"
            //  src="https://www.dealsfreak.com/wp-content/uploads/2020/01/Amazon-Great-Indian-Sale-Blog-Banner-min.jpg"
                alt=''
             />
        <div className="home_row">
          <Product 
          id="12345678"
          title=" the lean  style book"
            price={29.99}
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
            rating={3}
          />
          <Product
            id="09876543"
            title="the king kong"
            price={45.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnbjEDOxaYeVhpanqYxeuATEvQdNW8IxHKyt5EMJbiObArTdWzzDuFVTKqzbomqt1SrI&usqp=CAU"
            rating={2}
          />  
          
        </div>
        <div className="home_row">
          <Product/>
          <Product/>  
          <Product/>
          
          
          </div>
      </div>
    </div>
  )
}

export default Home
