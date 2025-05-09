import React from "react";
import styled from "styled-components";

const Tooltip = ({ children, title }) => {
  return (
    <StyledWrapper>
      <div className="Social-Btn">
        {children}
        <span className="BG ">{title}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Social-Btn {
    width: 4.5em;
    height: 2.5em;
    align-items: baseline;
    justify-content: center;
    border: none;

    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
    fill: white !important;
    position: relative;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
    color: white;
    background: rgba(83, 69, 69, 0.562);
  }

  .svgContainer > svg {
    width: 1.5rem;
  }

  .BG {
    padding-inline: 10px;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: transparent;
    filter: blur(4px);
    z-index: 4;
  }
  .BG::before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background: white;
    opacity: -1;
    z-index: -10;
    transition: 1s all;
  }
  .Social-Btn:hover .BG::before {
    opacity: 1;
  }
  .Social-Btn:hover .BG {
    transform: translateY(-130%);
    transform-origin: bottom;
    background: white;
    color: black;
    filter: blur(0px);
  }

  .Social-Btn:hover .svgContainer {
    z-index: 20;
    background-color: rgba(156, 156, 156, 0.466);
    filter: blur(0px);
    fill: black;
  }
`;

export default Tooltip;
