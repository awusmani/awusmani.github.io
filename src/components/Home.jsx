import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="nametext">
        <div className="wrapper">
          <div id="A" className="first-initial letter">A.</div>
          <div className="shadow">A.</div>
        </div>
        <div className="wrapper">
          <div id="space" className="letter"></div>
          <div className="shadow"> </div>
        </div>
        <div className="wrapper">
          <div id="WASAY" className="middle-name letter">W A S A Y</div>
          <div className="shadow">W A S A Y</div>
        </div>
        <div className="wrapper">
          <div id="space" className="letter"></div>
          <div className="shadow"> </div>
        </div>
        <div className="wrapper">
          <div id="USMANI" className="last-name letter">U S M A N I</div>
          <div className="shadow">U S M A N I</div>
        </div>
      </div>
    </section>
  );
}