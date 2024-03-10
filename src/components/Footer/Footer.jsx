import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer pt-5">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="text-center color-white mb-5">
                <h2 className="text-uppercase mb-3">Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center color-white mb-5">
                <h2 className="text-uppercase mb-3">AROUND THE WEB</h2>
                <div className="footerIcons d-flex align-items-center justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-facebook-f fa-lg "></i>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-twitter fa-lg "></i>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-linkedin-in fa-lg "></i>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-globe fa-lg "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center color-white mb-5">
                <h2 className="text-uppercase mb-3">ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="afterFooter py-3">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
