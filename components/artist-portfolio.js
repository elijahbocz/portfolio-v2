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
        <Image
          src="/images/artist-portfolio/home.png"
          width={400}
          height={225}
          alt="Artist Portfolio Home"
          onClick={handleHomeShow}
        />
        <Modal
          isOpen={showHome}
          onRequestClose={handleHomeClose}
          contentLabel="Artist Portfolio Home"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/home.png"
            width={400}
            height={225}
            alt="Artist Portfolio Home"
          />
        </Modal>

        <Image
          src="/images/artist-portfolio/gallery.png"
          width={400}
          height={225}
          alt="Artist Portfolio Gallery"
          onClick={handleGalleryShow}
        />
        <Modal
          isOpen={showGallery}
          onRequestClose={handleGalleryClose}
          contentLabel="Artist Portfolio Gallery"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/gallery.png"
            width={400}
            height={225}
            alt="Artist Portfolio Gallery"
          />
        </Modal>

        <Image
          src="/images/artist-portfolio/CMS.png"
          width={400}
          height={225}
          className="last-img"
          alt="Artist Portfolio CMS"
          onClick={handleCMSShow}
        />
        <Modal
          isOpen={showCMS}
          onRequestClose={handleCMSClose}
          contentLabel="Artist Portfolio CMS"
          style={customStyles}
        >
          <Image
            src="/images/artist-portfolio/CMS.png"
            width={400}
            height={225}
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
      <a href="https://github.com/elijahbocz/artist-portfolio">
        Source on GitHub
      </a>
      <a href="https://artist-portfolio-by-elijahbocz.netlify.app/">
        Live Site
      </a>
    </StyledCard>
  );
}

export default ArtistPortfolio;
