import React, {useEffect} from "react";
import "./Home.css";
import manPhoto from "../../assets/imgs/avataaars.svg";

export default function Home() {
  useEffect(() => {
    // Set the initial title when the component mounts
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center ">
        <div className="text-center">
          <img src={manPhoto} className="" />
          <h2 className="fw-bolder my-3 text-white fs-1">START FRAMEWORK</h2>
          <div className="icon">
            <span>
              <i class="fa-solid fa-star fa-sm text-white"></i>
            </span>
          </div>
          <p className="text-white mt-3">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
