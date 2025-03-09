import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="main-navigation">
      <div className="nav-logo">
        <h1>パーソナリティテスト</h1>
      </div>
      
      <ul className="nav-links">
        <li className={currentPage === 'home' ? 'active' : ''}>
          <button onClick={() => onNavigate('home')}>
            ホーム
          </button>
        </li>
        <li className={currentPage === 'test' ? 'active' : ''}>
          <button onClick={() => onNavigate('test')}>
            テストを受ける
          </button>
        </li>
        <li className={currentPage === 'history' ? 'active' : ''}>
          <button onClick={() => onNavigate('history')}>
            履歴
          </button>
        </li>
        <li className={currentPage === 'team-analysis' ? 'active' : ''}>
          <button onClick={() => onNavigate('team-analysis')}>
            チーム分析
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 