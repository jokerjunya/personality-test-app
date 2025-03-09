// テスト結果の型定義
export interface TestResult {
  id: string;
  timestamp: string;
  userName: string;
  teamName: string;
  mbtiResult: {
    type: string;
  };
  big5Result: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
}

// ローカルストレージのキー
const STORAGE_KEY = 'personality_test_results';

// テスト結果を保存する
export const saveTestResult = (result: TestResult): void => {
  try {
    // 既存の結果を取得
    const existingResults = getTestResults();
    
    // 新しい結果を追加
    const updatedResults = [...existingResults, result];
    
    // ローカルストレージに保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
  } catch (error) {
    console.error('テスト結果の保存に失敗しました:', error);
  }
};

// すべてのテスト結果を取得する
export const getTestResults = (): TestResult[] => {
  try {
    const resultsJson = localStorage.getItem(STORAGE_KEY);
    return resultsJson ? JSON.parse(resultsJson) : [];
  } catch (error) {
    console.error('テスト結果の取得に失敗しました:', error);
    return [];
  }
};

// 特定のIDのテスト結果を取得する
export const getTestResultById = (id: string): TestResult | undefined => {
  const results = getTestResults();
  return results.find(result => result.id === id);
};

// チーム名の一覧を取得する
export const getTeamNames = (): string[] => {
  const results = getTestResults();
  const teamNames = new Set(results.map(result => result.teamName));
  return Array.from(teamNames);
};

// 特定のチームのテスト結果を取得する
export const getTestResultsByTeam = (teamName: string): TestResult[] => {
  const results = getTestResults();
  return results.filter(result => result.teamName === teamName);
};

// MBTIの結果を計算する
export const calculateMbtiType = (answers: Record<string, string>): string => {
  const dimensions = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  };

  // 各次元の回答をカウント
  Object.entries(answers).forEach(([questionId, answer]) => {
    const dimension = questionId.split('-')[1];
    if (dimension in dimensions) {
      dimensions[dimension as keyof typeof dimensions][answer as keyof typeof dimensions[keyof typeof dimensions]]++;
    }
  });

  // 各次元で多い方を選択
  const mbtiType = 
    (dimensions.EI.E > dimensions.EI.I ? 'E' : 'I') +
    (dimensions.SN.S > dimensions.SN.N ? 'S' : 'N') +
    (dimensions.TF.T > dimensions.TF.F ? 'T' : 'F') +
    (dimensions.JP.J > dimensions.JP.P ? 'J' : 'P');

  return mbtiType;
};

// Big Fiveのスコアを計算する
export const calculateBigFiveScores = (answers: Record<string, number>) => {
  const traits = {
    openness: { total: 0, count: 0 },
    conscientiousness: { total: 0, count: 0 },
    extraversion: { total: 0, count: 0 },
    agreeableness: { total: 0, count: 0 },
    neuroticism: { total: 0, count: 0 }
  };

  // 各特性の回答を合計
  Object.entries(answers).forEach(([questionId, score]) => {
    const [_, trait] = questionId.split('-');
    if (trait in traits) {
      traits[trait as keyof typeof traits].total += score;
      traits[trait as keyof typeof traits].count++;
    }
  });

  // 各特性の平均スコアを計算（0-100%に正規化）
  return {
    openness: traits.openness.count > 0 
      ? Math.round((traits.openness.total / (traits.openness.count * 5)) * 100) 
      : 0,
    conscientiousness: traits.conscientiousness.count > 0 
      ? Math.round((traits.conscientiousness.total / (traits.conscientiousness.count * 5)) * 100) 
      : 0,
    extraversion: traits.extraversion.count > 0 
      ? Math.round((traits.extraversion.total / (traits.extraversion.count * 5)) * 100) 
      : 0,
    agreeableness: traits.agreeableness.count > 0 
      ? Math.round((traits.agreeableness.total / (traits.agreeableness.count * 5)) * 100) 
      : 0,
    neuroticism: traits.neuroticism.count > 0 
      ? Math.round((traits.neuroticism.total / (traits.neuroticism.count * 5)) * 100) 
      : 0
  };
}; 