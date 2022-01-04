import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

import StyledCard from "./styled/card";
import StyledImageRow from "./styled/image-row";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(`#__next`);

function SteamClub() {
  const [showSTEAM, setShowSTEAM] = useState(false);
  const handleSTEAMClose = () => setShowSTEAM(false);
  const handleSTEAMShow = () => setShowSTEAM(true);

  const [showSTEAM1, setShowSTEAM1] = useState(false);
  const handleSTEAM1Close = () => setShowSTEAM1(false);
  const handleSTEAM1Show = () => setShowSTEAM1(true);

  const [showSTEAM2, setShowSTEAM2] = useState(false);
  const handleSTEAM2Close = () => setShowSTEAM2(false);
  const handleSTEAM2Show = () => setShowSTEAM2(true);
  return (
    <StyledCard>
      <p class="card-title">The STEAM Club Report Generator</p>

      <StyledImageRow>
        <div className="img-container">
          <Image
            src="/images/steam-club/search.png"
            width={400}
            height={225}
            alt="The STEAM Club Report Search"
            onClick={handleSTEAMShow}
          />
        </div>
        <Modal
          isOpen={showSTEAM}
          onRequestClose={handleSTEAMClose}
          contentLabel="The STEAM Club Search"
          style={customStyles}
        >
          <Image
            src="/images/steam-club/search.png"
            width={400}
            height={225}
            formats={["auto", "webp", "avif"]}
            alt="The STEAM Club Report Search"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/steam-club/roster.png"
            width={400}
            height={225}
            alt="The STEAM Club Report Search"
            onClick={handleSTEAM1Show}
          />
        </div>
        <Modal
          isOpen={showSTEAM1}
          onRequestClose={handleSTEAM1Close}
          contentLabel="The STEAM Club Roster"
          style={customStyles}
        >
          <Image
            src="/images/steam-club/roster.png"
            width={400}
            height={225}
            alt="The STEAM Club Report Search"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/steam-club/roster_pdf.png"
            width={400}
            height={225}
            alt="The STEAM Club Report Search"
            onClick={handleSTEAM2Show}
          />
        </div>
        <Modal
          isOpen={showSTEAM2}
          onRequestClose={handleSTEAM2Close}
          contentLabel="The STEAM Club PDF"
          style={customStyles}
        >
          <Image
            src="/images/steam-club/roster_pdf.png"
            width={400}
            height={225}
            alt="The STEAM Club Report Search"
          />
        </Modal>
      </StyledImageRow>
      <p>
        Optimized report generation for administrators of The STEAM Club
        classes. It’s a Python Flask web application that uses a third party
        REST API to compile information about the classes and students, and
        stores it in a MySQL database. Deployed on an Ubuntu VM with
        DigitalOcean using Nginx as the web server.
      </p>
    </StyledCard>
  );
}

export default SteamClub;
