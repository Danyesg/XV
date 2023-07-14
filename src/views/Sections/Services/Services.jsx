import React from "react";
import PropTypes from "prop-types";

import { Row, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Popup from "reactjs-popup";


import "./Services.scss";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, jumpToAnchor, header: rootHeader, subheader: rootSubHeader, imageFileName } = frontmatter;



  return (
    <PageSection className={className} id={anchor}>

      <SectionHeader subheader="Es un dia muy esperado para mi y mi familia que quiero compartir contigo, espero puedas acompañarnos y ser parte de este gran dia Nos vemos !!" />

      <div >
        <Button
          size="xl"
          variant="primary"
          className="text-uppercase main-button"
          align="center"
          href="https://api.whatsapp.com/send/?phone=525555060528&text=Confirmo+mi+asistencia+a+mis+XV+Dayra&type=phone_number&app_absent=0"
        >
          <p className="buttonTitle" align="center">Confirma tu asistencia</p>
        </Button>
      </div >
      <SectionHeader header="Dayra" />

      <Row>
        <SectionHeader header="&hearts;" subheader="&hearts;" />{" "}
        {/*  <div className="message" align="center">
          <p className="paragraph3" align="center">
            Esperamos puedas acompañarnos y ser parte de este gran dia para nosotros. Nos vemos !!
          </p>{" "}
         
          <p className="paragraph5" align="center">
            Dany & Isra
          </p>{" "}
          
        </div>{" "}
        */}
      </Row>



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
