import Head from "next/head";
import styled from "styled-components";

import Layout from "../components/layout";
import SteamClub from "../components/steam-club";
import ArtistPortfolio from "../components/artist-portfolio";
import ExchangeTracker from "../components/exchange-tracker";
import FoodSaver from "../components/food-saver";
import StocksObserver from "../components/stocks-observer";

const StyledContent = styled.div`
  h2 {
    text-align: center;
  }

  a {
    color: #3D59AB;
    padding: 2px 1px 0;
    text-decoration none;
  }

  a:hover {
      border-bottom: 1px solid #3D59AB;
  }

  a:focus {
    border-bottom: 1px solid #3D59AB;
  }

  #about-me {
    margin: 0 1.33rem;
  }

  @media (max-width: 768px) {
    #about-me {
      margin: 1rem;
    }
  }
`;

const StyledCard = styled.div`
  margin: 2rem;
  padding: 1rem;
  background: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elijah Bocz | Programmer</title>
        <meta name="description" content="Personal portfolio for Elijah Bocz" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <StyledContent>
          <div id="about-me">
            I'm Elijah Bocz, an aspiring software engineer. I graduated
            in fall 2021 with a Bachelor's of Science in Computer Science from
            Georgia State University.
          </div>
          <div id="projects">
            <h2>Projects</h2>
            <SteamClub />
            <ArtistPortfolio />
            <ExchangeTracker />
            <FoodSaver />
            <StocksObserver />
          </div>
          <h2>Teaching Opportunities</h2>
          <StyledCard id="teaching">
            <p>
              Web Development teacher for{" "}
              <a href="https://chiaacademy.org/">CHIAcademics</a>, a hybrid home
              school. Taught middle to high school students basic web
              development, including HTML, CSS, and beginner JavaScript.
            </p>
            <p>
              <a href="https://www.thesteamclub.com/">The STEAM Club</a>{" "}
              Instructor of robotics and science after-school enrichment classes
              throughout Cobb county elementary schools. Developed curriculum
              for the robotics classes which used LEGO robotics, including WeDO,
              MindStorm, and NXT.
            </p>
          </StyledCard>
        </StyledContent>
      </Layout>
    </div>
  );
}
