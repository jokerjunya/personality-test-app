import React, { useState } from 'react';
import { mbtiQuestions } from '../data/questions';

interface MbtiTestProps {
  onComplete: (answers: Record<string, string>) => void;
}

const MbtiTest: React.FC<MbtiTestProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: number, dimension: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionId}-${dimension}`]: answer
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // すべての質問に回答されているか確認
    const allQuestionsAnswered = mbtiQuestions.every(
      q => answers[`q${q.id}-${q.dimension}`]
    );
    
    if (allQuestionsAnswered) {
      onComplete(answers);
    } else {
      alert('すべての質問に回答してください。');
    }
  };

  return (
    <div className="mbti-test">
      <h2>MBTIパーソナリティテスト</h2>
      <p>以下の質問に回答してください。あなたの性格タイプを判定します。</p>
      
      <form onSubmit={handleSubmit}>
        {mbtiQuestions.map(question => (
          <div key={question.id} className="question-card">
            <h3>質問 {question.id}</h3>
            <p>{question.text}</p>
            
            <div className="options">
              {question.options.map(option => (
                <label key={option.value} className="option-label">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={option.value}
                    checked={answers[`q${question.id}-${question.dimension}`] === option.value}
                    onChange={() => handleAnswer(question.id, question.dimension, option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
        
        <button type="submit" className="submit-button">
          次へ進む
        </button>
      </form>
    </div>
  );
};

export default MbtiTest; 