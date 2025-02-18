import React from 'react';
import styled from 'styled-components';

const Card = ({ phase, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {phase}
        <div className="description">
          <div className="title">{description.title}</div>
          <div className="body">{description.body}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 220px;
    height: 320px;
    background: mediumturquoise;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    background-color: lightblue;
    transition: all 0.5s;
    z-index: 1;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.5s;
    padding: 15px;
    z-index: 2;
  }

  .card:hover .description {
    opacity: 1;
  }

    .title {
    font-size: 20px; 
    font-weight: bold; 
  }

  .body {
    font-size: 14px; 
    color: #DCDCDC; 
  }
`;

const Process = () => {
      const phases = [
    {
      phase: "Phase 1",
      description: {
        title: "Blueprint & Strategy:",
        body: "We'll map out your project's core features, tech stack, and user flow to ensure a seamless full-stack experience.",
      },
    },
    {
      phase: "Phase 2",
      description: {
        title: "Progress in Motion:",
        body: "With the plan locked in, I’ll get to work building your project, keeping you in the loop with regular updates as each feature comes to life.",
      },
    },
    {
      phase: "Phase 3",
      description: {
        title: "Code to Launch:",
        body: "This is the build phase—turning ideas into reality with clean, functional code, ready to go live.",
      },
    },
    {
      phase: "Phase 4",
      description: {
        title: "Beyond the Launch:",
        body: "I’ll keep things running seamlessly with updates, fixes, and continuous care.",
      },
    },
  ];
//   const phases = [
//     {
//       phase: "Phase 1",
//       description: "Blueprint & Strategy: We'll map out your project's core features, tech stack, and user flow to ensure a seamless full-stack experience.",
//     //   description: "Planning & Strategy: We'll collaborate to map out your website's goals, target audience, and key functionalities.",
//     },
//     {
//       phase: "Phase 2",
//       description: "Progress in Motion: With the plan locked in, I’ll get to work building your project, keeping you in the loop with regular updates as each feature comes to life.",
//     //   description: "Development & Progress Update: Once we agree on the plan, I cue my lofi playlist and dive into coding.",
//     },
//     {
//       phase: "Phase 3",
//       description: "Code to Launch: This is the build phase—turning ideas into reality with clean, functional code, ready to go live.",
//     //   description: "Development & Launch: This is where the magic happens! I'll translate everything into functional code.",
//     },
//     {
//       phase: "Phase 4",
//       description: "Beyond the Launch: I’ll keep things running seamlessly with updates, fixes, and continuous care.",
//     //   description: "Support & Maintenance: After the launch, I'll ensure everything runs smoothly with ongoing support.",
//     },
//   ];

  return (
    <div>
      <h1 className='text-center'>Process</h1>
      <div className="flex m-5 p-4">
        {phases.map((phase, index) => (
          <span key={index} className="p-8">
            <Card phase={phase.phase} description={phase.description} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Process;