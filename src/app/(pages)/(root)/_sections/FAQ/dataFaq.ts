export interface IFaq {
  question: string;
  answer: string;
}

const dataFaq: IFaq[] = [
  {
    question: "How fast can we see results?",
    answer: "A landing page can go live in as little as 2 days. A full-scale brand site typically takes up to 21 days."
  },
  {
    question: "How do you price?",
    answer: "Each project is scoped based on complexity and impact — ensuring you only pay for results, not overhead."
  },
  {
    question: "How do you handle deadlines?",
    answer: "We follow strict internal processes. If we miss a promised deadline, you get an extra sprint free."
  },
  {
    question: "What makes us different from other agencies?",
    answer: "We don’t try to be “full-service.” We specialise in one thing that truly matters: creating websites and copy that resonate with your audience and drive real conversions."
  }
];

export default dataFaq;
