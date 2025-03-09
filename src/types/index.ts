// 質問の選択肢の型
export interface Choice {
  id: string;
  text: string;
  score: {
    E?: number; // 外向型(Extraversion)
    I?: number; // 内向型(Introversion)
    S?: number; // 感覚型(Sensing)
    N?: number; // 直感型(iNtuition)
    T?: number; // 思考型(Thinking)
    F?: number; // 感情型(Feeling)
    J?: number; // 判断型(Judging)
    P?: number; // 知覚型(Perceiving)
  };
}

// 質問の型
export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

// 回答の型
export interface Answer {
  questionId: number;
  choiceId: string;
}

// スコアの型
export interface Score {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

// パーソナリティタイプの型
export interface PersonalityType {
  code: string;
  name: string;
  description: string;
}

// テスト結果の型
export interface TestResult {
  type: PersonalityType;
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
} 