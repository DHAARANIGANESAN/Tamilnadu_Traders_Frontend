import React from 'react';
import './Services.css';

function ServicesSection() {
  return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p><i>Check out the great services we offer!!</i></p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8QNPE2VxJdI9MgJpy89Q31F8iPDG4wfdFg&usqp=CAU" className="card-img-top" alt="Best Price" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bxs-dollar-circle"></i></div>
                <h4 className="title">Best Price</h4>
                <p className="description"><i>All our products are at highly affordable prices with the highest quality available in the market.</i></p>
              </div>
            </div>
            
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
          <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdAcv7s-cKlu7D0ocRs4oBOg5g_xY4jSDRg&usqp=CAU" className="card-img-top" alt="Best Service" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bx-support"></i></div>
                <h4 className="title">Best Service</h4>
                <p className="description"><i>Consistently delivering exceptional service, we prioritize your satisfaction, ensuring every interaction leaves you with a smile.</i></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
          <div className="card">
              <img src="https://thumbs.dreamstime.com/b/best-quality-concept-hand-take-transparet-ball-wordcloud-red-inscription-41769678.jpg" className="card-img-top" alt="Best Quality" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bx-award"></i></div>
                <h4 className="title">Best Quality</h4>
                <p className="description"><i>Ensuring product authenticity and quality that's our motto. All of our products are of premium quality.</i></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
          <div className="card">
              <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Best customer Care" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bx-water"></i></div>
                <h4 className="title">Best Customer Care</h4>
                <p className="description"><i>Experience unparalleled customer satisfaction with our dedicated support team, committed to providing you with the best service.</i>
</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center"> {/* Add this div to center the second row */}
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.bHXTTtOl5SZCanu-KABV7QHaEl&pid=Api&P=0&h=180" className="card-img-top" alt="Best Price" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bxs-dollar-circle"></i></div>
                <h4 className="title">Best Security</h4>
                <p className="description"><i>Implementation of robust security measures, including SSL encryption, secure payment gateways, and compliance with data protection.</i></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            
          <div className="card">
              <img src="https://floridaindependent.com/wp-content/uploads/2020/10/product-review.jpg" alt="Best Service" style={{ width: '100%', height: '200px' }} />
              <div className="card-body">
                <div className="icon"><i className="bx bx-support"></i></div>
                <h4 className="title">Best Product Reviews</h4>
                <p className="description"><i>User-generated reviews and ratings for products to help other shoppers make informed purchasing decisions.</i></p>
              </div>
            </div>
          </div>
        </div> {/* Close the div for the centered row */}

      </div>
    </section>
  );
}

export default ServicesSection;
