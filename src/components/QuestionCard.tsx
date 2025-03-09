import React from 'react';
import { Question, Answer } from '../types';
import '../styles/QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  currentAnswer: Answer | undefined;
  onAnswerSelected: (answer: Answer) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswerSelected,
}) => {
  const handleChoiceClick = (choiceId: string) => {
    onAnswerSelected({
      questionId: question.id,
      choiceId,
    });
  };

  return (
    <div className="question-card">
      <h3 className="question-text">質問 {question.id}: {question.text}</h3>
      <div className="choices-container">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            className={`choice-button ${
              currentAnswer?.choiceId === choice.id ? 'selected' : ''
            }`}
            onClick={() => handleChoiceClick(choice.id)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; 