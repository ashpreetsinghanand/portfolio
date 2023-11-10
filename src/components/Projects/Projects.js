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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ashpreetsinghanand/FormBuilder"
              demoLink="https://youtu.be/ue9R2-g4LPw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet}
              isBlog={false}
              title="Crypto Wallet Extension"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ashpreetsinghanand/CryptoWalletExtension"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="Lottery Dapp"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/ashpreetsinghanand/LotteryDapp"
              demoLink="https://youtu.be/5Nm3lYIY7q8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ainft}
              isBlog={false}
              title="AI NFT Generator"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/ashpreetsinghanand/NFT-AI-Image-Generator"
              demoLink="https://nftaigenrator99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Dapp"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/ashpreetsinghanand/ToDoDapp"
              demoLink="https://youtu.be/6DjtAYyqmuE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoverse}
              isBlog={false}
              title="CryptoVerse"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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