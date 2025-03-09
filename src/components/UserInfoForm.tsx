import React, { useState } from 'react';

interface UserInfoFormProps {
  onSubmit: (userName: string, teamName: string) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 入力値の検証
    if (!userName.trim()) {
      setError('名前を入力してください。');
      return;
    }
    
    if (!teamName.trim()) {
      setError('チーム名を入力してください。');
      return;
    }
    
    // エラーをクリア
    setError('');
    
    // 親コンポーネントに値を渡す
    onSubmit(userName, teamName);
  };

  return (
    <div className="user-info-form">
      <h2>ユーザー情報</h2>
      <p>テスト結果を保存するために、以下の情報を入力してください。</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-name">名前:</label>
          <input
            id="user-name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="例: 田中 太郎"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="team-name">チーム名:</label>
          <input
            id="team-name"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="例: チームA"
          />
        </div>
        
        <button type="submit" className="submit-button">
          テストを開始する
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm; 