import React, { useState } from 'react';
import { bigFiveQuestions, bigFiveOptions } from '../data/questions';

interface BigFiveTestProps {
  onComplete: (answers: Record<string, number>) => void;
}

const BigFiveTest: React.FC<BigFiveTestProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleAnswer = (questionId: number, trait: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionId}-${trait}`]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // すべての質問に回答されているか確認
    const allQuestionsAnswered = bigFiveQuestions.every(
      q => answers[`q${q.id}-${q.trait}`]
    );
    
    if (allQuestionsAnswered) {
      onComplete(answers);
    } else {
      alert('すべての質問に回答してください。');
    }
  };

  return (
    <div className="big-five-test">
      <h2>ビッグファイブパーソナリティテスト</h2>
      <p>以下の質問に回答してください。あなたの性格特性を測定します。</p>
      
      <form onSubmit={handleSubmit}>
        {bigFiveQuestions.map(question => (
          <div key={question.id} className="question-card">
            <h3>質問 {question.id}</h3>
            <p>{question.text}</p>
            
            <div className="options">
              {bigFiveOptions.map(option => (
                <label key={option.value} className="option-label">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={option.value}
                    checked={answers[`q${question.id}-${question.trait}`] === option.value}
                    onChange={() => handleAnswer(question.id, question.trait, option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
        
        <button type="submit" className="submit-button">
          結果を見る
        </button>
      </form>
    </div>
  );
};

export default BigFiveTest; 