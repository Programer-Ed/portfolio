import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a href="mailto:edwin.nganga.tech@gmail.com">
        <button className="Btn text-center">Let's get in touch 📧</button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    display: flex;
  justify-content: center; /* Horizontally center the button */
  align-items: center; /* Vertically center the button */
//   height: 100vh; /* Make the wrapper take the full height of the viewport */  
  a {
    display: block;
    text-decoration: none; /* Remove the default link styling */
  }
  .Btn {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right, #0a3d77, #4fa3e8, #0a3d77, #0a3d77, #4fa3e8, #0a3d77); /* Blue gradient */
    background-size: 250%;
    background-position: left;
    color: #ffffff; /* White text */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
  }

  .Btn::before {
    position: absolute;
    content: "Let's get in touch 📧";
    color: #ffffff; /* White text on the button */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
    background-size: 200%;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }
`;

export default Button;
