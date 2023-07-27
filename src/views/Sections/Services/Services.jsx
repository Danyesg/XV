import React from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Popup from "reactjs-popup";
import Logo from '../../../../content/assets/images/favicon.png';


import "./Services.scss";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, jumpToAnchor, header: rootHeader, subheader: rootSubHeader, imageFileName } = frontmatter;



  return (
    <PageSection className={className} id={anchor} >

      <div align="center" className="marco">

        <SectionHeader subheader="Es un dia muy esperado para mi y mi familia que quiero compartir contigo, espero puedas acompañarnos y ser parte de este gran dia. Nos vemos pronto!!" />
        <Button
          size="xl"
          variant="primary"
          className="buttonC"
          align="center"


          href="https://api.whatsapp.com/send/?phone=525555060528&text=Confirmo+mi+asistencia+a+mis+XV+Dayra&type=phone_number&app_absent=0"
        >
          <p className="buttonC" align="center" > ⚡ Confirma tu asistencia ⚡ </p>

        </Button>
        <br />
        <br />
        <SectionHeader header="⚯  🪄 " subheader="" />{" "}
        {" "}

      </div >
      <SectionHeader header="   " />

      <div align="center">
        <img
          src={Logo}
          width="10%"
          height="10%"
          alt=""

        />

      </div>

      {/*  <p  className="large text-muted" align="center">
        <br /> Aunque nos gustan los niños, creemos que necesitan una noche libre. Sólo adultos, por
        favor.
      </p >

       */

      }
    </PageSection >



  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
