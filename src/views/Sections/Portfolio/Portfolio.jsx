import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import instagram from "../../../../content/assets/images/Test/instagram.svg";
import "./Portfolio.scss";
import iglesia from "../../../../content/assets/images/iglesia.jpeg";


const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }


  console.log("className", className)

  const { anchor, header, subheader, imageFileName } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" }; // color de mensaje despues de hastag
    notify.show(
      "Hashtag copiado en el portapapeles. Tómate un selfie y etiquétanos en las redes sociales!",
      "custom",
      500,
      alertColor,
    );
  };

  const Completionist = () => {
    return (
      <span className="marco">
        <div className="marco">
          <b>Bienvenidos!</b>
        </div>
        {/* joinButtonWrapper */}
        <div className="marco">
          <p>
            <i>
              <b> Ceremonia:</b>

            </i>
            <a
              href="https://goo.gl/maps/F4UpQYyxqW7j44sQA"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Bosques de Libia 25, Bosques de Aragon, 57170 Nezahualcóyotl, Méx</b>
              </i>
            </a>
          </p>

          <p>
            <i>
              <b>Recepcion: </b>
            </i>
            <a
              href="https://goo.gl/maps/pRGkaziUDjUUe4186"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Hacienda San Antonio</b>
              </i>
            </a>
          </p>
          <p>
            <i>
              <b>Music provided by</b>
            </i>
            <a
              href="http://cellobosco.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Carol Anne Bosco</b>
              </i>
            </a>
          </p>
          <p>
            <i>
              <b>Stay tuned for photos by</b>
            </i>
            <a
              href="https://anaisabelphotography.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Ana Isabel</b>
              </i>
            </a>
          </p>
        </div>{" "}
        {/* vendors */}
      </span> // finishedCountdown
    );
  };



  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }

    // Render a countdown

    return (
      <span>

        <div className="marco">
          <div className="countdownIntro">La celebracion será en:</div> {/* countdownIntro */}
          <p align="center" className="large text-muted" >Noviembre 18, 2023 7:00 PM </p>
          <div align="center">
            <a href="https://goo.gl/maps/2HrVkkNNfwEKLfaa6" >
              Parroquia de Nuestra Señora de Guadalupe
            </a>
          </div>
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{days}</div> {/* count */}
                <div className="unit">dias</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{hours}</div> {/* count */}
                <div className="unit">horas</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{minutes}</div> {/* count */}
                <div className="unit">minutos</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{seconds}</div> {/* count */}
                <div className="unit">segundos</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
          </div>{" "}
          {/* countdownWrapper */}

          {/* instaWrapper */}
        </div>{" "}
        {/* countdownAndTanuki */}
      </span>
    );
  };

  return (
    <div >
      <PageSection className={clsx("portfolio-section", className)} id={anchor} style={{ background: "#a5b5aa" }}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader} />
          <CopyToClipboard text="#Dayra2023">
            <button
              onClick={copiedToClipboard}
              id="copy-to-clipboard"
              variant="primary"
              type="button"
              size="xl"
              className="hashtag"
            >
              #Dayra2023
            </button>
          </CopyToClipboard>
        </Row>
        <div className="countdownAndVideoDiv">
          <Row>
            <Countdown date="2023-11-18T16:00:00-05:00" renderer={renderer} />
          </Row>
        </div>{" "}

        <br />

        <div className="parroquia-location">
          <div align="center">
            <img src={iglesia} width="70%" alt="" border-radius="100px" className="imgS" />
          </div>

        </ div>
        <br />
        <div className="countdownAndVideoDiv" align="center">
          <iframe
            title="map"
            id="parroquia-terra"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.580869207174!2d-99.0512808!3d19.4736295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb05fb9202c3%3A0xd4793bf7b1c327f!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20Guadalupe!5e0!3m2!1ses-419!2smx!4v1690401876486!5m2!1ses-419!2smx"

            width="360%"
            height="400"
            style={{ border: 1 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>{" "}

        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
