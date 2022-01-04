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

function FoodSaver() {
  const [showSubmissions, setShowSubmissions] = useState(false);
  const handleSubmissionsClose = () => setShowSubmissions(false);
  const handleSubmissionsShow = () => setShowSubmissions(true);

  const [showOwnerSubmission, setOwnerSubmission] = useState(false);
  const handleOwnerSubmissionClose = () => setOwnerSubmission(false);
  const handleOwnerSubmissionShow = () => setOwnerSubmission(true);

  const [showSubmissionClaimed, setShowSubmissionClaimed] = useState(false);
  const handleSubmissionClaimedClose = () => setShowSubmissionClaimed(false);
  const handleSubmissionClaimedShow = () => setShowSubmissionClaimed(true);

  return (
    <StyledCard>
      <p className="card-title">Food Saver</p>
      <StyledImageRow>
        <div className="img-container">
          <Image
            src="/images/food-saver/submissions.png"
            width={175}
            height={225}
            alt="Food Saver Submissions Example"
            onClick={handleSubmissionsShow}
          />
        </div>
        <Modal
          isOpen={showSubmissions}
          onRequestClose={handleSubmissionsClose}
          contentLabel="Exchange Tracker Dashboard"
          style={customStyles}
        >
          <Image
            src="/images/food-saver/submissions.png"
            width={175}
            height={225}
            alt="Food Saver Submissions Example"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/food-saver/owner_submission.png"
            width={175}
            height={225}
            alt="Food Saver Owner Submission"
            onClick={handleOwnerSubmissionShow}
          />
        </div>
        <Modal
          isOpen={showOwnerSubmission}
          onRequestClose={handleOwnerSubmissionClose}
          contentLabel="Food Saver Owner Submission"
          style={customStyles}
        >
          <Image
            src="/images/food-saver/owner_submission.png"
            width={175}
            height={225}
            alt="Food Saver Owner Submission"
          />
        </Modal>
        <div className="img-container">
          <Image
            src="/images/food-saver/submission_claimed.png"
            width={175}
            height={225}
            alt="Food Saver Submission Claimed"
            onClick={handleSubmissionClaimedShow}
          />
        </div>
        <Modal
          isOpen={showSubmissionClaimed}
          onRequestClose={handleSubmissionClaimedClose}
          contentLabel="Food Saver Submission Claimed"
          style={customStyles}
        >
          <Image
            src="/images/food-saver/submission_claimed.png"
            width={175}
            height={225}
            alt="Food Saver Submission Claimed"
          />
        </Modal>
      </StyledImageRow>
      <p>
        Android Application built with classmates for CSC 4350, which allows for
        people to advertise their spare/leftover food to be picked up by someone
        else in need. The application is built with Java, and Google Firebase is
        used for storage of data as well as user authentication.
      </p>
      <div className="links">
        <a href="https://github.com/elijahbocz/CTW-Group3">Source on GitHub</a>
      </div>
    </StyledCard>
  );
}

export default FoodSaver;
