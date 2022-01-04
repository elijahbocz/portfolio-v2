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

function ExchangeTracker() {
  const [showDashboard, setShowDashboard] = useState(false);
  const handleDashboardClose = () => setShowDashboard(false);
  const handleDashboardShow = () => setShowDashboard(true);

  const [showNewCoin, setShowNewCoin] = useState(false);
  const handleNewCoinClose = () => setShowNewCoin(false);
  const handleNewCoinShow = () => setShowNewCoin(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  return (
    <StyledCard>
      <p class="card-title">Exchange Tracker</p>

      <StyledImageRow>
        <div className="img-container">
          <Image
            src="/images/exchange-tracker/dashboard.png"
            width={400}
            height={225}
            className="test-img"
            alt="Exchange Tracker Dashboard"
            onClick={handleDashboardShow}
          />
        </div>
        <Modal
          isOpen={showDashboard}
          onRequestClose={handleDashboardClose}
          contentLabel="Exchange Tracker Dashboard"
          style={customStyles}
        >
          <Image
            src="/images/exchange-tracker/dashboard.png"
            width={400}
            height={225}
            alt="Exchange Tracker Dashboard"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/exchange-tracker/new_coin.png"
            width={400}
            height={225}
            alt="Exchange Tracker New Coin"
            onClick={handleNewCoinShow}
          />
        </div>
        <Modal
          isOpen={showNewCoin}
          onRequestClose={handleNewCoinClose}
          contentLabel="Exchange Tracker New Coin"
          style={customStyles}
        >
          <Image
            src="/images/exchange-tracker/new_coin.png"
            width={400}
            height={225}
            alt="Exchange Tracker New Coin"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/exchange-tracker/delete.png"
            width={400}
            height={225}
            alt="Exchange Tracker Delete"
            onClick={handleDeleteShow}
          />
        </div>
        <Modal
          isOpen={showDelete}
          onRequestClose={handleDeleteClose}
          contentLabel="Exchange Tracker Delete"
          style={customStyles}
        >
          <Image
            src="/images/exchange-tracker/delete.png"
            width={400}
            height={225}
            alt="Exchange Tracker Delete"
          />
        </Modal>
      </StyledImageRow>
      <p>
        Website that serves as a self-updating spreadsheet to track profits and
        losses for cryptocurrency purchases across different exchanges. The
        backend uses Flask to both query a third party API for data regarding
        each cryptocurrency, and serve data stored in a MySQL database to the
        frontend. The UI on the frontend is built with React and Styled
        Components. The site itself is deployed on an Ubuntu VM with
        DigitalOcean using Nginx as the web server.
      </p>
      <div className="links">
        <a href="https://github.com/elijahbocz/exchange-tracker">
          Source on GitHub
        </a>
        <a href="https://exchangetracker.net">Live Site</a>
      </div>
    </StyledCard>
  );
}

export default ExchangeTracker;
