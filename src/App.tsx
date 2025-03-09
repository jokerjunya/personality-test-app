import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// コンポーネント
import Navigation from './components/Navigation';
import UserInfoForm from './components/UserInfoForm';
import MbtiTest from './components/MbtiTest';
import BigFiveTest from './components/BigFiveTest';
import TestResults from './components/TestResults';
import TestHistory from './components/TestHistory';
import TeamAnalysis from './components/TeamAnalysis';

// ユーティリティ
import { 
  saveTestResult, 
  TestResult, 
  calculateMbtiType, 
  calculateBigFiveScores 
} from './utils/storage';

const App: React.FC = () => {
  // 現在のページ
  const [currentPage, setCurrentPage] = useState('home');
  
  // テスト関連の状態
  const [testStage, setTestStage] = useState<'user-info' | 'mbti' | 'big-five' | 'results'>('user-info');
  const [userName, setUserName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [mbtiAnswers, setMbtiAnswers] = useState<Record<string, string>>({});
  const [bigFiveAnswers, setBigFiveAnswers] = useState<Record<string, number>>({});
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);
  
  // ページ遷移
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // テストページに移動した場合、テストをリセット
    if (page === 'test') {
      setTestStage('user-info');
      setMbtiAnswers({});
      setBigFiveAnswers({});
      setCurrentResult(null);
    }
  };
  
  // ユーザー情報の送信
  const handleUserInfoSubmit = (name: string, team: string) => {
    setUserName(name);
    setTeamName(team);
    setTestStage('mbti');
  };
  
  // MBTIテストの完了
  const handleMbtiComplete = (answers: Record<string, string>) => {
    setMbtiAnswers(answers);
    setTestStage('big-five');
  };
  
  // Big Fiveテストの完了
  const handleBigFiveComplete = (answers: Record<string, number>) => {
    setBigFiveAnswers(answers);
    
    // テスト結果を計算
    const mbtiType = calculateMbtiType(mbtiAnswers);
    const bigFiveScores = calculateBigFiveScores(answers);
    
    // 結果オブジェクトを作成
    const result: TestResult = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      userName,
      teamName,
      mbtiResult: {
        type: mbtiType
      },
      big5Result: bigFiveScores
    };
    
    setCurrentResult(result);
    setTestStage('results');
  };
  
  // テスト結果の保存
  const handleSaveResult = () => {
    if (currentResult) {
      saveTestResult(currentResult);
      alert('テスト結果が保存されました。');
      
      // 履歴ページに移動
      setCurrentPage('history');
    }
  };
  
  // 履歴から結果を選択
  const handleSelectResult = (result: TestResult) => {
    setCurrentResult(result);
    setCurrentPage('results');
  };
  
  // 現在のページに応じたコンテンツを表示
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="home-page">
            <h2>パーソナリティテストへようこそ</h2>
            <p>このアプリでは、MBTIとビッグファイブのパーソナリティテストを受けることができます。</p>
            <p>テスト結果はローカルに保存され、チーム分析に活用できます。</p>
            <button 
              className="start-button"
              onClick={() => handleNavigate('test')}
            >
              テストを開始する
            </button>
          </div>
        );
        
      case 'test':
        return (
          <div className="test-page">
            {testStage === 'user-info' && (
              <UserInfoForm onSubmit={handleUserInfoSubmit} />
            )}
            
            {testStage === 'mbti' && (
              <MbtiTest onComplete={handleMbtiComplete} />
            )}
            
            {testStage === 'big-five' && (
              <BigFiveTest onComplete={handleBigFiveComplete} />
            )}
            
            {testStage === 'results' && currentResult && (
              <TestResults 
                result={currentResult} 
                onSaveResult={handleSaveResult} 
              />
            )}
          </div>
        );
        
      case 'history':
        return (
          <div className="history-page">
            <TestHistory onSelectResult={handleSelectResult} />
          </div>
        );
        
      case 'team-analysis':
        return (
          <div className="team-analysis-page">
            <TeamAnalysis />
          </div>
        );
        
      case 'results':
        return (
          <div className="results-page">
            {currentResult && (
              <TestResults result={currentResult} />
            )}
          </div>
        );
        
      default:
        return <div>ページが見つかりません。</div>;
    }
  };
  
  return (
    <div className="app">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
      
      <main className="main-content">
        {renderContent()}
      </main>
      
      <footer className="app-footer">
        <p>© 2023 パーソナリティテストアプリ</p>
      </footer>
    </div>
  );
};

export default App;
