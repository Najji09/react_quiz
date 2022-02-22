import React, { useState } from 'react';

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };
  const Congrats = () => {
    if (score <= 2) {
      return <p>You need to study harder!</p>;
    } else if (score > 2 && score <= 4) {
      return <p>Good job!</p>;
    } else {
      return <p>Congrats!!!</p>;
    }
  };
  const restart = () => {
    setCurrentQ(0);
    setShowScore(false);
    setScore(0);
  };
  const questions = [
    {
      questionText: 'What does HTML stand for?',
      answerOptions: [
        { answerText: 'Hot Time Milisecond Length', isCorrect: false },
        { answerText: 'Holes Tell Me Lies', isCorrect: false },
        { answerText: 'HyperText Markup Language', isCorrect: true },
        { answerText: 'He is The Man, Laura', isCorrect: false },
      ],
    },
    {
      questionText: 'How much does Visual Studio costs?',
      answerOptions: [
        { answerText: 'It is free!', isCorrect: true },
        { answerText: '10$', isCorrect: false },
        { answerText: '100$', isCorrect: false },
        { answerText: 'A penny', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is NOT a programming languge?',
      answerOptions: [
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'JavaScript', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'C++', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a ReactJS?',
      answerOptions: [
        { answerText: 'VS code extension', isCorrect: false },
        { answerText: 'Type of an error', isCorrect: false },
        { answerText: 'Icecream flavor', isCorrect: false },
        { answerText: 'JavaScript library', isCorrect: true },
      ],
    },
    {
      questionText: 'Which code is used for line breaks in HTML?',
      answerOptions: [
        { answerText: '<br>', isCorrect: true },
        { answerText: '<p>', isCorrect: false },
        { answerText: '<a>', isCorrect: false },
        { answerText: '<hr>', isCorrect: false },
      ],
    },
  ];

  return (
    <div className="app">
      {showScore ? (
        <div className="scoreSection">
          You scored <span>{score}</span> out of
          <span> {questions.length}</span>
          <Congrats />
          <button onClick={() => restart()}>Restart?</button>
        </div>
      ) : (
        <div className="qnaSection">
          <span className="qLength">
            Question {currentQ + 1}/{questions.length}
          </span>
          <div className="questionSection">
            {currentQ + 1}. {questions[currentQ].questionText}
          </div>
          <div className="answerSection">
            {questions[currentQ].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                <span>{index + 1}.</span>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
