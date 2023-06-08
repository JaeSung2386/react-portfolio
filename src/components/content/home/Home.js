import React, { useRef, useEffect } from "react";
import "./Home.css";
import Transition from "../../Transition";
import gsap from "gsap";

function Home() {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);

  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0
      },
      "-=3.5"
    );
    home.from(
      homeimg.current,
      {
        duration: 0.5,
        y: -200,
        opacity: 0
      },
      "-=3"
    );
  });

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* <Transition timeline={home} />
      <div className="home-image home-overlay" ref={homeimg}></div>
      <div className="container-home">
        <h1 ref={homeh1}>Home Page</h1>
      </div> */}
      {/* left */}
      <div
        style={{
          flex: "1",
          background: "url(../Assets/img2.jpg) center center no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
      {/* right */}
      <div
        style={{
          flex: "1",
          backgroundColor: "white"
        }}
      >
        <p>Some text here</p>
      </div>
    </div>
  );
}

export default Home;
