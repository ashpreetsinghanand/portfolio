import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/tododapp.png";
import lottery from "../../Assets/Projects/lotterydapp.png";
import ainft from "../../Assets/Projects/ainft.png";
import formbuilder from "../../Assets/Projects/formbuilder.png";
import cryptoverse from "../../Assets/Projects/cryptoverse.png";
import wallet from "../../Assets/Projects/cryptowallet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formbuilder}
              isBlog={false}
              title="Form Builder"
              description="Created a Form Building application using NextJs13, TypeScript, Shadcn-Ui and Prisma for ORM where user can create a form, save a from or publish to share the form. • Added interactive way of creating custom forms where user has to drag and drop the element which they need in their form • User can see Total Visits, Total Submissions, Submission Rate and Bounce Rate of all form and of each form they created. • Used Clerk for user authentication and PostgreSQL for saving of user data and SWR for fetching for data."
              ghLink="https://github.com/ashpreetsinghanand/FormBuilder"
              demoLink="https://youtu.be/ue9R2-g4LPw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet}
              isBlog={false}
              title="Crypto Wallet Extension"
              description="."
              ghLink="https://github.com/ashpreetsinghanand/CryptoWalletExtension"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="Lottery Dapp"
              description="Created a Lottery Dapp using Solidity, Truffle, JavaScript and NextJs framework. Smart contract deployed on polygon mumbai testnet • Multiple User can enter in a lottery and the owner can pick a winner randomly."
              ghLink="https://github.com/ashpreetsinghanand/LotteryDapp"
              demoLink="https://youtu.be/5Nm3lYIY7q8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ainft}
              isBlog={false}
              title="AI NFT Generator"
              description="Created AI based NFT website. User have to connect wallet and give name and description about the NFT art they want to mint."
              ghLink="https://github.com/ashpreetsinghanand/NFT-AI-Image-Generator"
              demoLink="https://nftaigenrator99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Dapp"
              description="Created a Todo List Dapp using Solidity, Truffle, JavaScript, Ethers.js and NextJs on Matic Testnet. User can Add and Delete Task a for which they Pay Gas Fee."
              ghLink="https://github.com/ashpreetsinghanand/ToDoDapp"
              demoLink="https://youtu.be/6DjtAYyqmuE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoverse}
              isBlog={false}
              title="CryptoVerse"
              description="Created a crypto website using JavaScript, React at Frontend, Firebase and using Coingecko Api. Features added like pagination, Login, SignUp and Searching"
              ghLink="https://github.com/ashpreetsinghanand/CRYPTO-VERSE"
               demoLink="https://cryptoverse99.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;