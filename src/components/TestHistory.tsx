import React, { useState, useEffect } from 'react';
import { getTestResults, TestResult } from '../utils/storage';

interface TestHistoryProps {
  onSelectResult: (result: TestResult) => void;
}

const TestHistory: React.FC<TestHistoryProps> = ({ onSelectResult }) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [filter, setFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [mbtiFilter, setMbtiFilter] = useState('');

  useEffect(() => {
    // テスト結果を取得
    const storedResults = getTestResults();
    setResults(storedResults);
  }, []);

  // チーム名の一覧を取得
  const teamNames = Array.from(new Set(results.map(result => result.teamName)));
  
  // MBTIタイプの一覧を取得
  const mbtiTypes = Array.from(new Set(results.map(result => result.mbtiResult.type)));

  // フィルタリングされた結果を取得
  const filteredResults = results.filter(result => {
    const nameMatch = result.userName.toLowerCase().includes(filter.toLowerCase());
    const teamMatch = teamFilter ? result.teamName === teamFilter : true;
    const mbtiMatch = mbtiFilter ? result.mbtiResult.type === mbtiFilter : true;
    return nameMatch && teamMatch && mbtiMatch;
  });

  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ja-JP');
  };

  return (
    <div className="test-history">
      <h2>テスト履歴</h2>
      
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="name-filter">名前で検索:</label>
          <input
            id="name-filter"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="名前を入力..."
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="team-filter">チームでフィルタ:</label>
          <select
            id="team-filter"
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
          >
            <option value="">すべてのチーム</option>
            {teamNames.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="mbti-filter">MBTIタイプでフィルタ:</label>
          <select
            id="mbti-filter"
            value={mbtiFilter}
            onChange={(e) => setMbtiFilter(e.target.value)}
          >
            <option value="">すべてのタイプ</option>
            {mbtiTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredResults.length > 0 ? (
        <div className="history-list">
          {filteredResults.map(result => (
            <div 
              key={result.id} 
              className="history-item"
              onClick={() => onSelectResult(result)}
            >
              <div className="history-item-header">
                <h3>{result.userName}</h3>
                <span className="team-badge">{result.teamName}</span>
                <span className="mbti-badge">{result.mbtiResult.type}</span>
              </div>
              
              <div className="history-item-details">
                <div className="test-date">
                  <span>テスト日時: {formatDate(result.timestamp)}</span>
                </div>
                
                <div className="big5-summary">
                  {Object.entries(result.big5Result).map(([trait, score]) => {
                    const traitNames: Record<string, string> = {
                      openness: '開放性',
                      conscientiousness: '誠実性',
                      extraversion: '外向性',
                      agreeableness: '協調性',
                      neuroticism: '神経症傾向'
                    };
                    return (
                      <div key={trait} className="trait-mini">
                        <span>{traitNames[trait]}: {score}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>テスト結果がありません。テストを受けて結果を保存してください。</p>
        </div>
      )}
    </div>
  );
};

export default TestHistory; 