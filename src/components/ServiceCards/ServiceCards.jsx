import React from "react";
import "./../ServiceCards/ServiceCards.css";
import Vector1 from "./../../assets/img/Vector1.svg";
import Vector2 from "./../../assets/img/Vector2.svg";
import Vector3 from "./../../assets/img/Vector3.svg";
import Vector4 from "./../../assets/img/Vector4.svg";
function ServiceCards() {
  return (
    <>
      <div className="service-cards">
        <div className="container-service-cards">
          <div className="row-service-cards">
            <div className="service-card">
              <div className="icon-part">
                <img src={Vector1} alt="vector1" />
              </div>
              <div className="description-part">
                <h3>Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-part">
                <img src={Vector2} alt="vector1" />
              </div>
              <div className="description-part">
                <h3>Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-part">
                <img src={Vector3} alt="vector1" />
              </div>
              <div className="description-part">
                <h3>Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-part">
                <img src={Vector4} alt="vector1" />
              </div>
              <div className="description-part">
                <h3>100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCards;
