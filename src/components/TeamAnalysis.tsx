import React, { useState, useEffect } from 'react';
import { getTestResults, getTeamNames, getTestResultsByTeam, TestResult } from '../utils/storage';

const TeamAnalysis: React.FC = () => {
  const [teamNames, setTeamNames] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [teamResults, setTeamResults] = useState<TestResult[]>([]);
  
  useEffect(() => {
    // チーム名の一覧を取得
    const teams = getTeamNames();
    setTeamNames(teams);
    
    // 最初のチームを選択
    if (teams.length > 0 && !selectedTeam) {
      setSelectedTeam(teams[0]);
    }
  }, [selectedTeam]);
  
  useEffect(() => {
    // 選択されたチームの結果を取得
    if (selectedTeam) {
      const results = getTestResultsByTeam(selectedTeam);
      setTeamResults(results);
    }
  }, [selectedTeam]);
  
  // MBTIの分布を計算
  const calculateMbtiDistribution = () => {
    const distribution: Record<string, number> = {};
    
    teamResults.forEach(result => {
      const mbtiType = result.mbtiResult.type;
      distribution[mbtiType] = (distribution[mbtiType] || 0) + 1;
    });
    
    return distribution;
  };
  
  // Big Fiveの統計を計算
  const calculateBigFiveStats = () => {
    const traits = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];
    const stats: Record<string, { avg: number; min: number; max: number }> = {};
    
    traits.forEach(trait => {
      const scores = teamResults.map(result => result.big5Result[trait as keyof typeof result.big5Result]);
      
      stats[trait] = {
        avg: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
        min: scores.length > 0 ? Math.min(...scores) : 0,
        max: scores.length > 0 ? Math.max(...scores) : 0
      };
    });
    
    return stats;
  };
  
  // チームの特徴を分析
  const analyzeTeamTraits = () => {
    if (teamResults.length === 0) return [];
    
    const bigFiveStats = calculateBigFiveStats();
    const mbtiDistribution = calculateMbtiDistribution();
    const insights: string[] = [];
    
    // 外向性の分析
    if (bigFiveStats.extraversion.avg > 70) {
      insights.push('チームは全体的に外向的で、活発なコミュニケーションが得意です。');
    } else if (bigFiveStats.extraversion.avg < 30) {
      insights.push('チームは全体的に内向的で、静かな環境での作業が得意かもしれません。');
    }
    
    // 開放性の分析
    if (bigFiveStats.openness.avg > 70) {
      insights.push('チームは新しいアイデアや創造的な解決策を生み出すのが得意です。');
    }
    
    // 協調性の分析
    if (bigFiveStats.agreeableness.avg > 70) {
      insights.push('チームは協力的で調和を重視する傾向があります。');
    } else if (bigFiveStats.agreeableness.avg < 30) {
      insights.push('チームは率直で競争的な環境を好む傾向があります。');
    }
    
    // 誠実性の分析
    if (bigFiveStats.conscientiousness.avg > 70) {
      insights.push('チームは計画的で責任感が強い傾向があります。');
    }
    
    // MBTIの分析
    const mbtiTypes = Object.keys(mbtiDistribution);
    const totalMembers = teamResults.length;
    
    // 思考型（T）と感情型（F）の比率
    const thinkers = mbtiTypes.filter(type => type.includes('T')).reduce((sum, type) => sum + mbtiDistribution[type], 0);
    const feelers = mbtiTypes.filter(type => type.includes('F')).reduce((sum, type) => sum + mbtiDistribution[type], 0);
    
    if (thinkers > feelers && thinkers / totalMembers > 0.7) {
      insights.push('チームは論理的な意思決定を好む傾向があります。');
    } else if (feelers > thinkers && feelers / totalMembers > 0.7) {
      insights.push('チームは人間関係や価値観を重視した意思決定を好む傾向があります。');
    }
    
    // 直感型（N）と感覚型（S）の比率
    const intuitives = mbtiTypes.filter(type => type.includes('N')).reduce((sum, type) => sum + mbtiDistribution[type], 0);
    const sensors = mbtiTypes.filter(type => type.includes('S')).reduce((sum, type) => sum + mbtiDistribution[type], 0);
    
    if (intuitives > sensors && intuitives / totalMembers > 0.7) {
      insights.push('チームは大局的な視点や将来の可能性を重視する傾向があります。');
    } else if (sensors > intuitives && sensors / totalMembers > 0.7) {
      insights.push('チームは具体的な事実や現実的な解決策を重視する傾向があります。');
    }
    
    return insights;
  };
  
  // 日本語の特性名
  const traitNames: Record<string, string> = {
    openness: '開放性',
    conscientiousness: '誠実性',
    extraversion: '外向性',
    agreeableness: '協調性',
    neuroticism: '神経症傾向'
  };
  
  const mbtiDistribution = calculateMbtiDistribution();
  const bigFiveStats = calculateBigFiveStats();
  const teamInsights = analyzeTeamTraits();
  
  return (
    <div className="team-analysis">
      <h2>チーム分析</h2>
      
      <div className="team-selector">
        <label htmlFor="team-select">チームを選択:</label>
        <select
          id="team-select"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {teamNames.map(team => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </div>
      
      {teamResults.length > 0 ? (
        <div className="analysis-content">
          <div className="team-members">
            <h3>チームメンバー ({teamResults.length}名)</h3>
            <ul className="member-list">
              {teamResults.map(result => (
                <li key={result.id} className="member-item">
                  <span className="member-name">{result.userName}</span>
                  <span className="member-mbti">{result.mbtiResult.type}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mbti-distribution">
            <h3>MBTIタイプの分布</h3>
            <div className="distribution-chart">
              {Object.entries(mbtiDistribution).map(([type, count]) => (
                <div key={type} className="distribution-item">
                  <div className="type-label">{type}</div>
                  <div className="type-count">{count}名</div>
                  <div 
                    className="type-bar" 
                    style={{ width: `${(count / teamResults.length) * 100}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="big-five-stats">
            <h3>ビッグファイブ特性の統計</h3>
            <div className="stats-chart">
              {Object.entries(bigFiveStats).map(([trait, stats]) => (
                <div key={trait} className="trait-stats">
                  <div className="trait-name">{traitNames[trait]}</div>
                  <div className="stats-bar-container">
                    <div className="stats-range" style={{ 
                      left: `${stats.min}%`, 
                      width: `${stats.max - stats.min}%` 
                    }}></div>
                    <div className="stats-avg" style={{ left: `${stats.avg}%` }}></div>
                  </div>
                  <div className="stats-values">
                    <span>平均: {stats.avg}%</span>
                    <span>最小: {stats.min}%</span>
                    <span>最大: {stats.max}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="team-insights">
            <h3>チームの特徴</h3>
            {teamInsights.length > 0 ? (
              <ul className="insights-list">
                {teamInsights.map((insight, index) => (
                  <li key={index} className="insight-item">{insight}</li>
                ))}
              </ul>
            ) : (
              <p>チームの特徴を分析するにはより多くのデータが必要です。</p>
            )}
          </div>
        </div>
      ) : (
        <div className="no-team-data">
          <p>選択されたチームのデータがありません。テストを受けて結果を保存してください。</p>
        </div>
      )}
    </div>
  );
};

export default TeamAnalysis; 