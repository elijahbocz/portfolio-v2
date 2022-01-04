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

function StocksObserver() {
  const [showHome, setShowHome] = useState(false);
  const handleHomeClose = () => setShowHome(false);
  const handleHomeShow = () => setShowHome(true);

  const [showDesc, setShowDesc] = useState(false);
  const handleDescClose = () => setShowDesc(false);
  const handleDescShow = () => setShowDesc(true);

  const [showGraphs, setShowGraphs] = useState(false);
  const handleGraphsClose = () => setShowGraphs(false);
  const handleGraphsShow = () => setShowGraphs(true);

  return (
    <StyledCard>
      <p class="card-title">Stocks Observer</p>

      <StyledImageRow>
        <Image
          src="/images/stocks-observer/home.png"
          width={400}
          height={225}
          alt="Stocks Observer Home"
          onClick={handleHomeShow}
        />
        <Modal
          isOpen={showHome}
          onRequestClose={handleHomeClose}
          contentLabel="Stocks Observer Home"
          style={customStyles}
        >
          <Image
            src="/images/stocks-observer/home.png"
            width={400}
            height={225}
            alt="Stocks Observer Home"
          />
        </Modal>

        <Image
          src="/images/stocks-observer/TSLA_desc.png"
          width={400}
          height={225}
          alt="Stocks Observer Description Example"
          onClick={handleDescShow}
        />
        <Modal
          isOpen={showDesc}
          onRequestClose={handleDescClose}
          contentLabel="Stocks Observer Description Example"
          style={customStyles}
        >
          <Image
            src="/images/stocks-observer/TSLA_desc.png"
            width={400}
            height={225}
            alt="Stocks Observer Description Example"
          />
        </Modal>

        <Image
          src="/images/stocks-observer/TSLA_graphs.png"
          width={400}
          height={225}
          alt="Stocks Observer Graphs Example"
          onClick={handleGraphsShow}
        />
        <Modal
          isOpen={showGraphs}
          onRequestClose={handleGraphsClose}
          contentLabel="Stocks Observer Graphs Example"
          style={customStyles}
        >
          <Image
            src="/images/stocks-observer/TSLA_graphs.png"
            width={400}
            height={225}
            alt="Stocks Observer Graphs Example"
          />
        </Modal>
      </StyledImageRow>
      <p>
        Android mobile application that displays current and historical
        information about the stock market. The application was written in Java
        and uses the Volley library to send HTTP requests to multiple third
        party APIs.
      </p>
      <a href="https://github.com/elijahbocz/stocks-observer">
        Source on GitHub
      </a>
    </StyledCard>
  );
}

export default StocksObserver;
