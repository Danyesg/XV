import React from "react";
import PropTypes from "prop-types";

import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Vestimenta.scss";

import men1 from "../../../../content/assets/images/pareja.png";

const Vestimenta = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <div>
      <PageSection className={className} id={anchor} style={{ background: "#a5b5aa" }}>
        <Notifications options={{ zIndex: 10, top: "20px" }} />
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            <div className="terra-location">
              <div align="center">
                <p className="large text-muted">
                  <SectionHeader header="Mujeres" />
                </p>



                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
              <div align="center">
                <p className="large text-muted" >
                  <SectionHeader header="Hombres" />
                </p>



                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
            </div>

          </Col>
          <Col lg={8} className="mx-auto text-center">

            <h4>
              Formal casual <br /></h4>

            <img

              src={men1}
              width="60%"

              alt=""
              border-radius="70px"
              className="conborde"
              align="center"
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        {/* <Row>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={4} key={header}>
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </Row>
          */}
      </PageSection >
    </div >
  );
};

Vestimenta.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Vestimenta.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Vestimenta;
