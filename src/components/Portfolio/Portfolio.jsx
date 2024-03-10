import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import img1 from "../../assets/imgs/poert1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";

export default function Portfolio() {
  useEffect(() => {
    // Set the initial title when the component mounts
    document.title = "Portfolio";

    // Clean up the title when the component unmounts
    return () => {
      document.title = "Home";
    };
  }, []);
  const [data, setData] = useState([
    { img: img1, id: "img1" },
    { img: img2, id: "img2" },
    { img: img3, id: "img3" },
    { img: img3, id: "img4" },
    { img: img1, id: "img5" },
    { img: img2, id: "img6" },
  ]);

  return (
    <>
      <section className="Portfolio py-3">
        <div className="d-flex align-items-center justify-content-center text-center flex-column">
          <div className="headerText">
            <h2 className="fw-bolder my-3 fs-1">PORTFOLIO COMPONENT</h2>
            <div className="icon">
              <span>
                <i className="fa-solid fa-star fa-sm "></i>
              </span>
            </div>
          </div>
          <div className="container my-5">
            <div className="row g-5">
              {data.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="portfolioItem">
                    <img src={item.img} className="w-100 rounded-3" alt="" />
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={"#" + item.id}
                      className="plus rounded-3"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
              {data.map((item) => (
                <>
                  <div
                    class="modal fade"
                    id={item.id}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-body">
                          <img src={item.img} className="w-100" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
