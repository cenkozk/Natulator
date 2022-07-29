import { Button, keyframes } from "@mui/material";
import React from "react";

export default function Buttons(props) {
  const muktaFont = "'Mukta', sans-serif";

  const getBigger = keyframes`
  from {
    border-radius: 30px;
  }
  to {
    border-radius: 15px;
  }
`;
  const getSmaller = keyframes`
  from {
    border-radius: 15px;
  }
  to {
    border-radius: 30px;
  }
`;

  const buttonStylesNormal = {
    borderRadius: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    fontSize: "4vh",
    fontFamily: muktaFont,
    fontWeight: "600",
    color: "#373e47",
    animation: `${getSmaller} 0.2s ease`,
    "&:hover": { backgroundColor: "#ffffff", boxShadow: "none" },
    "&:active": { animation: `${getBigger} 0.1s ease`, animationFillMode: "forwards" },
  };

  const buttonStylesFunction = {
    borderRadius: "30px",
    backgroundColor: "#E97272",
    boxShadow: "none",
    fonstFamily: muktaFont,
    fontSize: "4vh",
    color: "#f1f2f3",
    animation: `${getSmaller} 0.2s ease`,
    "&:hover": { backgroundColor: "#E97272", boxShadow: "none" },
    "&:active": { animation: `${getBigger} 0.1s ease`, animationFillMode: "forwards" },
  };

  const buttonStylesUpper = {
    borderRadius: "30px",
    backgroundColor: "#D2D3DA",
    boxShadow: "none",
    fonstFamily: muktaFont,
    fontSize: "4vh",
    color: "#f1f2f3",
    animation: `${getSmaller} 0.2s ease`,
    animationFillMode: "forwards",
    "&:hover": { backgroundColor: "#D2D3DA", boxShadow: "none" },
    "&:active": { animation: `${getBigger} 0.1s ease`, animationFillMode: "forwards" },
  };

  return (
    <div className="buttons">
      <Button
        sx={buttonStylesUpper}
        onClick={() => {
          props.handleClickFunctions("C");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        C
      </Button>
      <Button
        sx={buttonStylesUpper}
        onClick={() => {
          props.handleClickFunctions("½");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        ½
      </Button>
      <Button
        sx={buttonStylesUpper}
        onClick={() => {
          props.handleClickFunctions("%");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        %
      </Button>
      <Button
        sx={buttonStylesFunction}
        onClick={() => {
          props.handleClickFunctions("/");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        ÷
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(7);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        7
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(8);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        8
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(9);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        9
      </Button>
      <Button
        sx={buttonStylesFunction}
        onClick={() => {
          props.handleClickFunctions("*");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        ✗
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(4);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        4
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(5);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        5
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(6);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        6
      </Button>
      <Button
        sx={buttonStylesFunction}
        onClick={() => {
          props.handleClickFunctions("-");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        -
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(1);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        1
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(2);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        2
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(3);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        3
      </Button>
      <Button
        sx={buttonStylesFunction}
        onClick={() => {
          props.handleClickFunctions("+");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        +
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(".");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        .
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickNum(0);
        }}
        className="buttons-calculator"
        variant="contained"
      >
        0
      </Button>
      <Button
        sx={buttonStylesNormal}
        onClick={() => {
          props.handleClickFunctions("D");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        D
      </Button>
      <Button
        sx={buttonStylesFunction}
        onClick={() => {
          props.handleClickFunctions("=");
        }}
        className="buttons-calculator"
        variant="contained"
      >
        =
      </Button>
    </div>
  );
}
