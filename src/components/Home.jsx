import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="nametext">
        <div className="wrapper">
          <div id="A" className="letter">A</div>
          <div className="shadow">A</div>
        </div>
        <div className="wrapper">
          <div id="B" className="letter">B</div>
          <div className="shadow">B</div>
        </div>
        <div className="wrapper">
          <div id="D" className="letter">D</div>
          <div className="shadow">D</div>
        </div>
        <div className="wrapper">
          <div id="U" className="letter">U</div>
          <div className="shadow">U</div>
        </div>
        <div className="wrapper">
          <div id="L" className="letter">L</div>
          <div className="shadow">L</div>
        </div>
        <div className="wrapper">
          <div id="space" className="letter"></div>
          <div className="shadow"> </div>
        </div>
        <div className="wrapper">
          <div id="W" className="letter">W</div>
          <div className="shadow">W</div>
        </div>
        <div className="wrapper">
          <div id="space" className="letter"></div>
          <div className="shadow"> </div>
        </div>
        <div className="wrapper">
          <div id="Utwo" className="letter">U</div>
          <div className="shadow">U</div>
        </div>
        <div className="wrapper">
          <div id="S" className="letter">S</div>
          <div className="shadow">S</div>
        </div>
        <div className="wrapper">
          <div id="M" className="letter">M</div>
          <div className="shadow">M</div>
        </div>
        <div className="wrapper">
          <div id="Atwo" className="letter">A</div>
          <div className="shadow">A</div>
        </div>
        <div className="wrapper">
          <div id="N" className="letter">N</div>
          <div className="shadow">N</div>
        </div>
        <div className="wrapper">
          <div id="I" className="letter">I</div>
          <div className="shadow">I</div>
        </div>
      </div>
    </section>
  );
}