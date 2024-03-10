import React, {useEffect} from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    // Set the initial title when the component mounts
    document.title = "About";

    // Clean up the title when the component unmounts
    return () => {
      document.title = "Home";
    };
  }, []);
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center flex-column">
        <div className="text-center">
          <h2 className="fw-bolder my-3 text-white fs-1">ABOUT COMPONENT</h2>
          <div className="icon">
            <span>
              <i class="fa-solid fa-star fa-sm text-white"></i>
            </span>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 ">
            <div className="col-md-6">
              <p className="text-white parag mb-4 mb-md-0">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white parag">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
