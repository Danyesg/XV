import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer >
      <Container>
        <Row align="center">
          <Col>
            <p >#DayraXV</p>
          </Col>
        </Row>
      </Container>
    </footer >
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
