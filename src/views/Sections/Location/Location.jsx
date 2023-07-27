import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Location.scss";

import logo from "../../../../content/assets/images/Salon1.jpeg";


// Funciones del carrusel

let i = 0;
let a = 0;

let slideIndex = 0;
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("mySlides");

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    a = slideIndex - 1;
    dots[a].className += " active";
  }
  /* slides[slideIndex - 1].style.display = "block"; */

  /* slides[a].style.display = "block"; 
    dots[a].className += " active"; */
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

parent.addEventListener(
  "mousewheel",
  function () {
    currentSlide(1);
  },
  { once: true },
);

parent.addEventListener(
  "touchmove",
  function () {
    currentSlide(1);
  },
  { once: true },
);

const Location = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, subheader1 } = frontmatter;

  return (
    <div className="marco">
      <PageSection className={clsx("portfolio-section", className)} id={anchor}  >
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader} />

          <a href="https://goo.gl/maps/bmsriTPk61RSy4Dq6" >
            Cuautitlán Mz 511 Lote 32 Ciudad Azteca 1ra Sección, C.P. 55120 Ecatepec de Morelos.

          </a>
        </Row>

        <div >
          <div align="center">
            <img src={logo} width="50%" height="20%" alt="" className="imgS" /* tamaño imagen salon */ />
          </div>

        </ div>
        <br />
        <div className="countdownAndVideoDiv" align="center" >
          <iframe /* mapa del salon */
            title="map"
            id="mapa-terra"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15040.290524506972!2d-99.0340671!3d19.5384951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f00b58849c63%3A0x4674608844d92488!2sHacienda%20San%20Antonio!5e0!3m2!1ses-419!2smx!4v1687915193192!5m2!1ses-419!2smx"


            width="460%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            border-radius="70px"
            className="conborde1"

          />
        </div>{" "}
        <br />

        {/* countdownAndVideoDiv */}
      </PageSection>
    </div >
  );
};

Location.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Location.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Location;
