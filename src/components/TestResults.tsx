import React from 'react';
import { mbtiDescriptions, bigFiveDescriptions } from '../data/questions';
import { TestResult } from '../utils/storage';

interface TestResultsProps {
  result: TestResult;
  onSaveResult?: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ result, onSaveResult }) => {
  const { mbtiResult, big5Result } = result;
  
  // Big Five特性の表示順序
  const traits = [
    { key: 'openness', name: '開放性' },
    { key: 'conscientiousness', name: '誠実性' },
    { key: 'extraversion', name: '外向性' },
    { key: 'agreeableness', name: '協調性' },
    { key: 'neuroticism', name: '神経症傾向' }
  ];

  return (
    <div className="test-results">
      <h2>あなたのパーソナリティテスト結果</h2>
      
      <div className="result-section mbti-result">
        <h3>MBTIタイプ: {mbtiResult.type}</h3>
        <p>{mbtiDescriptions[mbtiResult.type]}</p>
      </div>
      
      <div className="result-section big-five-result">
        <h3>ビッグファイブ特性</h3>
        
        <div className="trait-bars">
          {traits.map(trait => {
            const score = big5Result[trait.key as keyof typeof big5Result];
            return (
              <div key={trait.key} className="trait-bar">
                <div className="trait-label">{trait.name}</div>
                <div className="bar-container">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                <div className="trait-score">{score}%</div>
                <div className="trait-description">
                  {bigFiveDescriptions[trait.key]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="result-insights">
        <h3>あなたの特徴</h3>
        <ul>
          {big5Result.openness > 70 && (
            <li>あなたは新しいアイデアや経験に対してオープンな傾向があります。</li>
          )}
          {big5Result.conscientiousness > 70 && (
            <li>あなたは計画的で責任感が強い傾向があります。</li>
          )}
          {big5Result.extraversion > 70 && (
            <li>あなたは社交的でエネルギッシュな傾向があります。</li>
          )}
          {big5Result.agreeableness > 70 && (
            <li>あなたは協力的で思いやりのある傾向があります。</li>
          )}
          {big5Result.neuroticism < 30 && (
            <li>あなたは感情的に安定している傾向があります。</li>
          )}
          {mbtiResult.type.includes('N') && big5Result.openness > 60 && (
            <li>あなたは創造的で直感的な思考を好む傾向があります。</li>
          )}
          {mbtiResult.type.includes('T') && big5Result.agreeableness < 50 && (
            <li>あなたは論理的で客観的な判断を好む傾向があります。</li>
          )}
          {mbtiResult.type.includes('J') && big5Result.conscientiousness > 60 && (
            <li>あなたは計画を立てて物事を進めるのが得意な傾向があります。</li>
          )}
        </ul>
      </div>
      
      {onSaveResult && (
        <button onClick={onSaveResult} className="save-button">
          結果を保存する
        </button>
      )}
    </div>
  );
};

export default TestResults; 