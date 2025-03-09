import React from 'react';
import { TestResult } from '../types';
import '../styles/ResultCard.css';

interface ResultCardProps {
  result: TestResult;
  onRestartTest: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestartTest }) => {
  const { type, scores } = result;

  // 各次元のパーセンテージを計算
  const calculatePercentage = (score1: number, score2: number) => {
    const total = score1 + score2;
    if (total === 0) return 50;
    return Math.round((score1 / total) * 100);
  };

  const dimensions = [
    {
      name: '外向型 vs 内向型',
      trait1: { code: 'E', label: '外向型', score: scores.E },
      trait2: { code: 'I', label: '内向型', score: scores.I },
    },
    {
      name: '感覚型 vs 直感型',
      trait1: { code: 'S', label: '感覚型', score: scores.S },
      trait2: { code: 'N', label: '直感型', score: scores.N },
    },
    {
      name: '思考型 vs 感情型',
      trait1: { code: 'T', label: '思考型', score: scores.T },
      trait2: { code: 'F', label: '感情型', score: scores.F },
    },
    {
      name: '判断型 vs 知覚型',
      trait1: { code: 'J', label: '判断型', score: scores.J },
      trait2: { code: 'P', label: '知覚型', score: scores.P },
    },
  ];

  return (
    <div className="result-card">
      <h2 className="result-title">あなたのパーソナリティタイプ</h2>
      <div className="type-container">
        <h1 className="type-code">{type.code}</h1>
        <h3 className="type-name">{type.name}</h3>
      </div>

      <p className="type-description">{type.description}</p>

      <div className="dimensions-container">
        <h3>あなたの特性分布</h3>
        {dimensions.map((dimension) => {
          const trait1Percentage = calculatePercentage(
            dimension.trait1.score,
            dimension.trait2.score
          );
          const trait2Percentage = 100 - trait1Percentage;

          return (
            <div key={dimension.name} className="dimension">
              <div className="dimension-header">
                <span>{dimension.name}</span>
                <span>
                  {dimension.trait1.code}: {trait1Percentage}% / {dimension.trait2.code}:{' '}
                  {trait2Percentage}%
                </span>
              </div>
              <div className="dimension-bar">
                <div
                  className="dimension-progress"
                  style={{ width: `${trait1Percentage}%` }}
                ></div>
              </div>
              <div className="dimension-labels">
                <span>{dimension.trait1.label}</span>
                <span>{dimension.trait2.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="restart-button" onClick={onRestartTest}>
        テストをやり直す
      </button>
    </div>
  );
};

export default ResultCard; 