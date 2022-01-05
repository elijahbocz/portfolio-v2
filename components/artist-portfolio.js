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

function ArtistPortfolio() {
  const [showGallery, setShowGallery] = useState(false);
  const handleGalleryClose = () => setShowGallery(false);
  const handleGalleryShow = () => setShowGallery(true);

  const [showHome, setShowHome] = useState(false);
  const handleHomeClose = () => setShowHome(false);
  const handleHomeShow = () => setShowHome(true);

  const [showCMS, setShowCMS] = useState(false);
  const handleCMSClose = () => setShowCMS(false);
  const handleCMSShow = () => setShowCMS(true);

  return (
    <StyledCard>
      <p className="card-title">Artist Portfolio</p>
      <StyledImageRow>
        <div className="img-container">
          <Image
            src="/images/artist-portfolio/home.png"
            width={400}
            height={225}
            alt="Artist Portfolio Home"
            onClick={handleHomeShow}
          />
        </div>
        <Modal
          isOpen={showHome}
          onRequestClose={handleHomeClose}
          contentLabel="Artist Portfolio Home"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/home.png"
            width={1366}
            height={768}
            alt="Artist Portfolio Home"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/artist-portfolio/gallery.png"
            width={400}
            height={225}
            alt="Artist Portfolio Gallery"
            onClick={handleGalleryShow}
          />
        </div>
        <Modal
          isOpen={showGallery}
          onRequestClose={handleGalleryClose}
          contentLabel="Artist Portfolio Gallery"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/gallery.png"
            width={1366}
            height={768}
            alt="Artist Portfolio Gallery"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/artist-portfolio/cms.png"
            width={400}
            height={225}
            alt="Artist Portfolio CMS"
            onClick={handleCMSShow}
          />
        </div>
        <Modal
          isOpen={showCMS}
          onRequestClose={handleCMSClose}
          contentLabel="Artist Portfolio CMS"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/cms.png"
            width={1366}
            height={768}
            alt="Artist Portfolio CMS"
          />
        </Modal>
      </StyledImageRow>
      <p>
        Static site that was used for a fine art portfolio, generated with
        Gatsby and the NetlifyCMS plugin. The UI is built with React and Styled
        Components, images are hosted on Cloudinary CDN, and the site is
        deployed on Netlify.
      </p>
      <div className="links">
        <a href="https://github.com/elijahbocz/artist-portfolio">
          Source on GitHub
        </a>
        <a href="https://artist-portfolio-by-elijahbocz.netlify.app/">
          Live Site
        </a>
      </div>
    </StyledCard>
  );
}

export default ArtistPortfolio;
