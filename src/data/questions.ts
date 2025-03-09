import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: '新しい環境では、通常...',
    choices: [
      { id: '1a', text: '積極的に会話を始める', score: { E: 2 } },
      { id: '1b', text: '多くの人と知り合いになる', score: { E: 1 } },
      { id: '1c', text: '静かに観察することが多い', score: { I: 1 } },
      { id: '1d', text: '一人でいることを好む', score: { I: 2 } },
    ],
  },
  {
    id: 2,
    text: '問題解決において、あなたは...',
    choices: [
      { id: '2a', text: '具体的な事実や詳細に注目する', score: { S: 2 } },
      { id: '2b', text: '過去の経験から学んだことを活かす', score: { S: 1 } },
      { id: '2c', text: '直感や可能性を重視する', score: { N: 1 } },
      { id: '2d', text: '新しいアイデアや理論を探求する', score: { N: 2 } },
    ],
  },
  {
    id: 3,
    text: '決断を下す際、あなたは主に...',
    choices: [
      { id: '3a', text: '論理と客観的な分析に基づいて判断する', score: { T: 2 } },
      { id: '3b', text: '事実と効率性を重視する', score: { T: 1 } },
      { id: '3c', text: '人々の感情や価値観を考慮する', score: { F: 1 } },
      { id: '3d', text: '調和と人間関係を最優先する', score: { F: 2 } },
    ],
  },
  {
    id: 4,
    text: '計画に関して、あなたは...',
    choices: [
      { id: '4a', text: '事前に詳細な計画を立てることを好む', score: { J: 2 } },
      { id: '4b', text: '締め切りを守り、計画通りに進めたい', score: { J: 1 } },
      { id: '4c', text: '柔軟に対応し、状況に応じて計画を変更する', score: { P: 1 } },
      { id: '4d', text: '自然な流れに任せ、即興的に行動する', score: { P: 2 } },
    ],
  },
  {
    id: 5,
    text: '社交的な場では、あなたは...',
    choices: [
      { id: '5a', text: '多くの人と交流することでエネルギーを得る', score: { E: 2 } },
      { id: '5b', text: '会話を楽しみ、積極的に参加する', score: { E: 1 } },
      { id: '5c', text: '少人数での深い会話を好む', score: { I: 1 } },
      { id: '5d', text: '長時間の社交の後は一人の時間が必要', score: { I: 2 } },
    ],
  },
  {
    id: 6,
    text: '情報を処理する際、あなたは...',
    choices: [
      { id: '6a', text: '具体的な事実や詳細を重視する', score: { S: 2 } },
      { id: '6b', text: '実用的で現実的な情報を好む', score: { S: 1 } },
      { id: '6c', text: '全体像や関連性を見ることを好む', score: { N: 1 } },
      { id: '6d', text: '抽象的な概念や可能性を探求する', score: { N: 2 } },
    ],
  },
  {
    id: 7,
    text: '対立が生じた場合、あなたは...',
    choices: [
      { id: '7a', text: '客観的な事実に基づいて議論する', score: { T: 2 } },
      { id: '7b', text: '論理的に問題を分析する', score: { T: 1 } },
      { id: '7c', text: '全員の感情を考慮して解決策を探る', score: { F: 1 } },
      { id: '7d', text: '調和を保ち、人間関係を優先する', score: { F: 2 } },
    ],
  },
  {
    id: 8,
    text: '日常生活において、あなたは...',
    choices: [
      { id: '8a', text: '整理整頓され、構造化された環境を好む', score: { J: 2 } },
      { id: '8b', text: '計画を立て、それに従って行動する', score: { J: 1 } },
      { id: '8c', text: '柔軟性を持ち、状況に応じて対応する', score: { P: 1 } },
      { id: '8d', text: '自由に探索し、選択肢をオープンにしておく', score: { P: 2 } },
    ],
  },
  {
    id: 9,
    text: 'エネルギーを回復するために、あなたは...',
    choices: [
      { id: '9a', text: '友人と過ごしたり、活動的に行動する', score: { E: 2 } },
      { id: '9b', text: '人々と交流することでリフレッシュする', score: { E: 1 } },
      { id: '9c', text: '静かな環境で一人の時間を持つ', score: { I: 1 } },
      { id: '9d', text: '内省や個人的な趣味に時間を使う', score: { I: 2 } },
    ],
  },
  {
    id: 10,
    text: '新しいプロジェクトに取り組む際、あなたは...',
    choices: [
      { id: '10a', text: '具体的な手順と明確な指示を好む', score: { S: 2 } },
      { id: '10b', text: '実践的なアプローチと現実的な目標を設定する', score: { S: 1 } },
      { id: '10c', text: '創造的なアイデアと可能性を探る', score: { N: 1 } },
      { id: '10d', text: '革新的な方法と将来の展望に焦点を当てる', score: { N: 2 } },
    ],
  },
  {
    id: 11,
    text: '他者を評価する際、あなたは...',
    choices: [
      { id: '11a', text: '能力と成果を重視する', score: { T: 2 } },
      { id: '11b', text: '公平さと一貫性を重視する', score: { T: 1 } },
      { id: '11c', text: '思いやりと協力的な姿勢を評価する', score: { F: 1 } },
      { id: '11d', text: '個人の成長と幸福を重視する', score: { F: 2 } },
    ],
  },
  {
    id: 12,
    text: '仕事のスタイルとして、あなたは...',
    choices: [
      { id: '12a', text: '締め切りを守り、計画通りに進める', score: { J: 2 } },
      { id: '12b', text: '体系的に取り組み、一つずつ完了させる', score: { J: 1 } },
      { id: '12c', text: '複数のタスクを同時に進行させる', score: { P: 1 } },
      { id: '12d', text: '締め切り直前に集中して作業する', score: { P: 2 } },
    ],
  },
  {
    id: 13,
    text: 'グループ活動では、あなたは...',
    choices: [
      { id: '13a', text: 'リーダーシップを取ることが多い', score: { E: 2 } },
      { id: '13b', text: '積極的に意見を述べる', score: { E: 1 } },
      { id: '13c', text: '必要な時だけ発言する', score: { I: 1 } },
      { id: '13d', text: '静かに観察し、内省的に考える', score: { I: 2 } },
    ],
  },
  {
    id: 14,
    text: '学習において、あなたは...',
    choices: [
      { id: '14a', text: '具体的な例と実践的な応用を好む', score: { S: 2 } },
      { id: '14b', text: '段階的に学び、詳細を理解したい', score: { S: 1 } },
      { id: '14c', text: '概念間のつながりを探求する', score: { N: 1 } },
      { id: '14d', text: '理論的な枠組みと抽象的な概念を好む', score: { N: 2 } },
    ],
  },
  {
    id: 15,
    text: '批評を受ける際、あなたは...',
    choices: [
      { id: '15a', text: '客観的に分析し、改善点を見つける', score: { T: 2 } },
      { id: '15b', text: '論理的に評価し、感情を脇に置く', score: { T: 1 } },
      { id: '15c', text: '個人的に受け止め、感情的に反応することがある', score: { F: 1 } },
      { id: '15d', text: '批評の背後にある意図や感情を考慮する', score: { F: 2 } },
    ],
  },
  {
    id: 16,
    text: '休暇の計画について、あなたは...',
    choices: [
      { id: '16a', text: '詳細な旅程を事前に計画する', score: { J: 2 } },
      { id: '16b', text: '主要な活動と宿泊先を予約しておく', score: { J: 1 } },
      { id: '16c', text: '大まかな計画だけ立て、詳細は現地で決める', score: { P: 1 } },
      { id: '16d', text: '計画なしで、その場の流れに任せる', score: { P: 2 } },
    ],
  },
  {
    id: 17,
    text: '会話において、あなたは...',
    choices: [
      { id: '17a', text: '幅広いトピックについて話すことを楽しむ', score: { E: 2 } },
      { id: '17b', text: '自分の考えや経験を積極的に共有する', score: { E: 1 } },
      { id: '17c', text: '聞き役になることが多い', score: { I: 1 } },
      { id: '17d', text: '深く考えてから発言する', score: { I: 2 } },
    ],
  },
  {
    id: 18,
    text: '問題に直面した時、あなたは...',
    choices: [
      { id: '18a', text: '過去の経験や既知の解決策を適用する', score: { S: 2 } },
      { id: '18b', text: '具体的な事実と現実的な制約を考慮する', score: { S: 1 } },
      { id: '18c', text: '新しい視点や創造的な解決策を探る', score: { N: 1 } },
      { id: '18d', text: 'パターンを見つけ、根本的な原因を探求する', score: { N: 2 } },
    ],
  },
  {
    id: 19,
    text: '意思決定において、あなたは...',
    choices: [
      { id: '19a', text: '客観的な基準と論理的な分析を重視する', score: { T: 2 } },
      { id: '19b', text: '公平さと一貫性を保つよう努める', score: { T: 1 } },
      { id: '19c', text: '関係者の感情と価値観を考慮する', score: { F: 1 } },
      { id: '19d', text: '人々への影響と調和を最優先する', score: { F: 2 } },
    ],
  },
  {
    id: 20,
    text: '日常生活において、あなたは...',
    choices: [
      { id: '20a', text: '予定通りに物事を進めることを好む', score: { J: 2 } },
      { id: '20b', text: '決断を下し、問題を解決することに満足を感じる', score: { J: 1 } },
      { id: '20c', text: '選択肢をオープンにしておくことを好む', score: { P: 1 } },
      { id: '20d', text: '新しい情報や可能性を探求することを楽しむ', score: { P: 2 } },
    ],
  },
];

// MBTIの質問
export const mbtiQuestions = [
  {
    id: 1,
    text: "あなたは人と交流するのが好きですか？",
    dimension: "EI",
    options: [
      { value: "E", label: "はい (E)" },
      { value: "I", label: "いいえ (I)" }
    ]
  },
  {
    id: 2,
    text: "あなたは具体的な事実よりも可能性や概念に興味がありますか？",
    dimension: "SN",
    options: [
      { value: "N", label: "はい (N)" },
      { value: "S", label: "いいえ (S)" }
    ]
  },
  {
    id: 3,
    text: "あなたは決断する際に論理よりも感情を重視しますか？",
    dimension: "TF",
    options: [
      { value: "F", label: "はい (F)" },
      { value: "T", label: "いいえ (T)" }
    ]
  },
  {
    id: 4,
    text: "あなたは計画を立てて行動するのが好きですか？",
    dimension: "JP",
    options: [
      { value: "J", label: "はい (J)" },
      { value: "P", label: "いいえ (P)" }
    ]
  }
];

// Big Fiveの質問
export const bigFiveQuestions = [
  {
    id: 1,
    text: "私は新しいことに挑戦するのが好きだ。",
    trait: "openness",
    traitName: "開放性"
  },
  {
    id: 2,
    text: "私は計画を立てて物事を進めるのが得意だ。",
    trait: "conscientiousness",
    traitName: "誠実性"
  },
  {
    id: 3,
    text: "私は人と話すのが好きだ。",
    trait: "extraversion",
    traitName: "外向性"
  },
  {
    id: 4,
    text: "私は他人の気持ちに共感しやすい。",
    trait: "agreeableness",
    traitName: "協調性"
  },
  {
    id: 5,
    text: "私はストレスを感じやすい。",
    trait: "neuroticism",
    traitName: "神経症傾向"
  },
  {
    id: 6,
    text: "私は芸術や美に関心がある。",
    trait: "openness",
    traitName: "開放性"
  },
  {
    id: 7,
    text: "私は責任感が強い。",
    trait: "conscientiousness",
    traitName: "誠実性"
  },
  {
    id: 8,
    text: "私は社交的なイベントを楽しむ。",
    trait: "extraversion",
    traitName: "外向性"
  },
  {
    id: 9,
    text: "私は他人を助けることが好きだ。",
    trait: "agreeableness",
    traitName: "協調性"
  },
  {
    id: 10,
    text: "私は心配事が多い。",
    trait: "neuroticism",
    traitName: "神経症傾向"
  }
];

// Big Fiveの回答オプション
export const bigFiveOptions = [
  { value: 1, label: "全く当てはまらない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 3, label: "どちらでもない" },
  { value: 4, label: "やや当てはまる" },
  { value: 5, label: "非常に当てはまる" }
];

// MBTIタイプの説明
export const mbtiDescriptions: Record<string, string> = {
  "ISTJ": "几帳面で責任感が強く、実践的な問題解決者です。",
  "ISFJ": "思いやりがあり、細部に気を配る献身的なサポーター役です。",
  "INFJ": "洞察力があり、理想主義的で、他者の成長を助けることに情熱を持ちます。",
  "INTJ": "独立心が強く、分析的で、複雑な問題の解決策を見つけるのが得意です。",
  "ISTP": "冷静で論理的、実践的なトラブルシューターです。",
  "ISFP": "芸術的で感受性が強く、自分の価値観に従って生きます。",
  "INFP": "理想主義的で思いやりがあり、他者や社会に貢献することに価値を見出します。",
  "INTP": "論理的で創造的な思考家で、複雑な理論や概念に興味を持ちます。",
  "ESTP": "活動的で適応力があり、実践的な問題解決者です。",
  "ESFP": "社交的で楽観的、人生を楽しむことを大切にします。",
  "ENFP": "熱心で創造的、可能性を見出し新しいアイデアを生み出すのが得意です。",
  "ENTP": "機知に富み、好奇心旺盛で、新しい視点や解決策を探求します。",
  "ESTJ": "効率的で実践的なリーダーで、明確な構造と計画を好みます。",
  "ESFJ": "協力的で思いやりがあり、調和のとれた環境を作るのが得意です。",
  "ENFJ": "カリスマ的で思いやりがあり、他者の成長と発展を支援します。",
  "ENTJ": "決断力があり、戦略的なリーダーで、長期的な目標達成に向けて努力します。"
};

// Big Fiveの特性説明
export const bigFiveDescriptions: Record<string, string> = {
  "openness": "新しい経験や創造的な活動に対する開放性を示します。高いスコアは好奇心旺盛で創造的な傾向を、低いスコアは伝統的で実践的な傾向を示します。",
  "conscientiousness": "計画性、責任感、自己規律を示します。高いスコアは几帳面で目標志向の傾向を、低いスコアは柔軟でリラックスした傾向を示します。",
  "extraversion": "社交性、活動性、外向的な傾向を示します。高いスコアは社交的でエネルギッシュな傾向を、低いスコアは内向的で静かな傾向を示します。",
  "agreeableness": "他者との協調性や思いやりを示します。高いスコアは協力的で思いやりのある傾向を、低いスコアは競争的で直接的な傾向を示します。",
  "neuroticism": "感情の安定性や不安傾向を示します。高いスコアは感情的で不安になりやすい傾向を、低いスコアは感情的に安定している傾向を示します。"
}; 