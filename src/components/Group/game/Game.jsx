import React, { useState, useEffect } from "react";

const InteractiveTree = () => {
  const questions = [
    "Is the location in a humid climate?",
    "Is it in a coastal area?",
    "Are high temperatures common?",
    "Is there a high risk of earthquakes?",
    "Is the project located in an urban environment?",
  ];

  const materials = {
    "yes_yes_yes_yes_yes": ["Steel", "Double-glazed Glass", "Concrete"],
    "yes_yes_no_no_no": ["Wood", "Tempered Glass", "Brick"],
    "no_no_no_no_no": ["Reinforced Concrete", "Single-glazed Glass", "Concrete"],
    "no_yes_no_yes_no": ["Steel", "Laminated Glass", "Concrete"],
    "yes_no_no_no_yes": ["Wood", "Double-glazed Glass", "Brick"],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [positions, setPositions] = useState([
    { x: window.innerWidth / 2 - 100, y: 100 },
  ]);
  const [treeElements, setTreeElements] = useState([]);

  useEffect(() => {
    addQuestion(positions[0].x, positions[0].y, questions[0]);
  }, []);

  const drawLine = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    const line = (
      <div
        className="line"
        style={{
          width: `${length}px`,
          height: "2px",
          left: `${x1}px`,
          top: `${y1}px`,
          transform: `rotate(${angle}deg)`,
        }}
      />
    );
    setTreeElements((prev) => [...prev, line]);
  };

  const addQuestion = (x, y, questionText) => {
    const questionBox = (
      <div
        className="question-box"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
        key={`question-${x}-${y}`}
      >
        <p>{questionText}</p>
        <div>
          <button
            className="yes-button"
            onClick={() => nextStep("yes", x, y, true)}
          >
            YES
          </button>
          <button
            className="no-button"
            onClick={() => nextStep("no", x, y, false)}
          >
            NO
          </button>
        </div>
      </div>
    );
    setTreeElements((prev) => [...prev, questionBox]);
  };

  const nextStep = (answer, prevX, prevY, isYes) => {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestionIndex((prev) => prev + 1);

    const xOffset = isYes ? -150 : 150; // Left for YES, Right for NO
    const yOffset = 150; // Downward
    const newX = prevX + xOffset;
    const newY = prevY + yOffset;

    // Draw line from the previous question to the current
    drawLine(prevX + 100, prevY + 75, newX + 100, newY);

    if (currentQuestionIndex + 1 < questions.length) {
      addQuestion(newX, newY, questions[currentQuestionIndex + 1]);
    } else {
      showResult(newX, newY);
    }
  };

  const showResult = (x, y) => {
    const key = answers.join("_");
    const selectedMaterials =
      materials[key] || ["Generic Steel", "Generic Glass", "Generic Concrete"];

    const resultBox = (
      <div
        className="question-box"
        style={{
          left: `${x}px`,
          top: `${y + 150}px`,
          backgroundColor: "green",
          color: "white",
        }}
        key="result"
      >
        <h3>Recommended Materials</h3>
        <p>
          <strong>Skeleton:</strong> {selectedMaterials[0]}
        </p>
        <p>
          <strong>Windows:</strong> {selectedMaterials[1]}
        </p>
        <p>
          <strong>Walls:</strong> {selectedMaterials[2]}
        </p>
      </div>
    );
    setTreeElements((prev) => [...prev, resultBox]);
  };

  return (
    <div>
      <style>
        {`
          body {
              background-color: black;
              color: white;
              font-family: Arial, sans-serif;
              margin: 0;
              overflow-x: hidden;
              overflow-y: scroll;
          }
          h1 {
              text-align: center;
              margin-top: 20px;
              margin-bottom: 50px;
              font-size: 36px;
          }
          #tree-container {
              position: relative;
              width: 100%;
              height: 2000px;
              margin: 0 auto;
          }
          .question-box {
              position: absolute;
              background-color: white;
              color: black;
              padding: 15px;
              border-radius: 10px;
              text-align: center;
              font-size: 16px;
              width: 200px;
          }
          .yes-button, .no-button {
              background-color: white;
              color: black;
              border: none;
              padding: 8px 16px;
              margin: 5px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
          }
          .yes-button:hover {
              background-color: green;
              color: white;
          }
          .no-button:hover {
              background-color: red;
              color: white;
          }
          .line {
              position: absolute;
              background-color: white;
              transform-origin: top left;
          }
        `}
      </style>
      <h1>Interactive Decision Tree</h1>
      <div id="tree-container">{treeElements}</div>
    </div>
  );
};

export default InteractiveTree;

