import React, { useState } from 'react';
import { Question, Answer, TestResult } from '../types';
import { questions } from '../data/questions';
import { calculateResult } from '../utils/calculateResult';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultCard from './ResultCard';
import '../styles/PersonalityTest.css';

const PersonalityTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);
  const [testStarted, setTestStarted] = useState(false);

  const currentQuestion: Question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleAnswerSelected = (answer: Answer) => {
    // 既存の回答を更新または新しい回答を追加
    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      (a) => a.questionId === answer.questionId
    );

    if (existingAnswerIndex !== -1) {
      updatedAnswers[existingAnswerIndex] = answer;
    } else {
      updatedAnswers.push(answer);
    }

    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // テスト終了、結果を計算
      const testResult = calculateResult(answers);
      setResult(testResult);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setTestStarted(true);
  };

  const getCurrentAnswer = () => {
    return answers.find((a) => a.questionId === currentQuestion.id);
  };

  // 開始画面
  if (!testStarted && !result) {
    return (
      <div className="personality-test">
        <div className="start-screen">
          <h1>16パーソナリティタイプ診断テスト</h1>
          <p>
            このテストでは、あなたの性格特性を分析し、16パーソナリティタイプのどれに当てはまるかを診断します。
            20の質問に答えて、あなたの性格タイプを発見しましょう。
          </p>
          <p>
            各質問には正解や不正解はありません。あなた自身に最も当てはまる回答を選んでください。
          </p>
          <button className="start-button" onClick={handleStartTest}>
            テストを開始する
          </button>
        </div>
      </div>
    );
  }

  // 結果画面
  if (result) {
    return (
      <div className="personality-test">
        <ResultCard result={result} onRestartTest={handleRestartTest} />
      </div>
    );
  }

  // 質問画面
  return (
    <div className="personality-test">
      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />
      <QuestionCard
        question={currentQuestion}
        currentAnswer={getCurrentAnswer()}
        onAnswerSelected={handleAnswerSelected}
      />
      <div className="navigation-buttons">
        <button
          className="nav-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          前へ
        </button>
        <button
          className="nav-button"
          onClick={handleNextQuestion}
          disabled={!getCurrentAnswer()}
        >
          {currentQuestionIndex === totalQuestions - 1 ? '結果を見る' : '次へ'}
        </button>
      </div>
    </div>
  );
};

export default PersonalityTest; 