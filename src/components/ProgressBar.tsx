import React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div className="progress-text">
        質問 {currentQuestion} / {totalQuestions}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar; 