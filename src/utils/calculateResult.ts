import { Answer, Question, Score, TestResult } from '../types';
import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalityTypes';

// 回答からスコアを計算する関数
export const calculateScore = (answers: Answer[]): Score => {
  // 初期スコアを設定
  const initialScore: Score = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 各回答に対してスコアを加算
  return answers.reduce((score, answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) return score;

    const choice = question.choices.find((c) => c.id === answer.choiceId);
    if (!choice) return score;

    // 各特性のスコアを加算
    Object.entries(choice.score).forEach(([trait, value]) => {
      if (value && trait in score) {
        score[trait as keyof Score] += value;
      }
    });

    return score;
  }, initialScore);
};

// スコアからパーソナリティタイプを判定する関数
export const determinePersonalityType = (score: Score): TestResult => {
  // 各次元で優勢な特性を判定
  const typeCode = [
    score.E > score.I ? 'E' : 'I',
    score.S > score.N ? 'S' : 'N',
    score.T > score.F ? 'T' : 'F',
    score.J > score.P ? 'J' : 'P',
  ].join('');

  // タイプコードに対応するパーソナリティタイプを検索
  const personalityType = personalityTypes.find((type) => type.code === typeCode);

  if (!personalityType) {
    throw new Error(`パーソナリティタイプが見つかりません: ${typeCode}`);
  }

  return {
    type: personalityType,
    scores: score,
  };
};

// 回答からテスト結果を計算する関数
export const calculateResult = (answers: Answer[]): TestResult => {
  const score = calculateScore(answers);
  return determinePersonalityType(score);
}; 