import React from "react";
import "../App.css"
let homeImg = `data:image/png;base64,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`;
export default function Home() {
  return (
    <>
      <div className="homeContainer  p-4 m-5   mt-5 rounded-5 ">
        <div>
          <h2 className="fw-bolder m-3">
            I'm Karan , <br />A Mern Developer
          </h2>
          <p className="fw-light text-wrap m-3">
            Hey my name is karan pandey I'm from Pratapgarh uttarpradesh if i
            talk about my education than i am a BCA 3rd year student and i have
            some skills like -
            <span className="fw-bolder text-primary fs-1-md ">
              HTML, CSS ,JavaScript, React js , node Js, Express Js , Mongo DB,
              Mongoose and Bootstrap ,
            </span>
            which became me a Full-Stack developer. .
          </p>

          <button type="button" className="btn btn-primary mx-3">
            Hire Me
          </button>
          <button type="button" className="btn btn-outline-danger mx-2">
            Portfolio
          </button>
        </div>

        <div>
          <img
            className="containerImg"
            src="https://tse2.mm.bing.net/th?id=OIP.hbUDh-qOiE4FUTejsL3MbAHaE7&pid=Api&P=0"
            alt="img"
          />
        </div>
      </div>

      <div className="homeContainers   m-5   mt-5 rounded-5 ">
        <div className="container" >
          <h2 className="fw-bolder m-3 ">
            Learn More About <br /> This Website
          </h2>
          <p className="fw-light text-wrap m-3">
            Web designers generally have nothing to do with creating content for
            their projects. Even so, the look of a site can be incomplete if no
            words are included. Web designers need to find ways to incorporate
            copyright-free content into their designs to provide clients with a
            look that is as finished as possible. Creating a prototype website
            that also contains copy and images is the only way to help the
            client understand what the concept behind your design is. 
          </p>

          <button type="button" className="rounded-5 btn btn-primary mx-3">
            Explore More
          </button>
        </div>

        <div>
          <img className="containerImg tImg "  src={homeImg} alt="img" />
        </div>
      </div>
       
       <div className="container p-3" ></div>
      <hr />
    </>
  );
}
