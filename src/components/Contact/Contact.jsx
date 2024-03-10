import React, {useEffect} from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    // Set the initial title when the component mounts
    document.title = "Contact";

    // Clean up the title when the component unmounts
    return () => {
      document.title = "Home";
    };
  }, []);
  return (
    <>
      <section className="contact">
        <div className="d-flex align-items-center justify-content-center text-center flex-column">
          <div className="headerText">
            <h2 className="fw-bolder my-3 fs-1">CONATCT SECTION</h2>
            <div className="icon">
              <span>
                <i class="fa-solid fa-star fa-sm "></i>
              </span>
            </div>
          </div>
          <form action="" className="contactForm w-50 mt-5">
            <input
              type="text"
              placeholder="User Name..."
              name="userName"
              id="userName"
              className="w-100 form-control border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="text"
              placeholder="User Age..."
              name="userAge"
              id="userAge"
              className="w-100 form-control border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="text"
              placeholder="User Email..."
              name="userEmail"
              id="userEmail"
              className="w-100 form-control border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="text"
              placeholder="User Password..."
              name="userPass"
              id="userPass"
              className="w-100 form-control border-0 border-bottom rounded-0 mb-5"
            />
            <button class="btn btnn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
