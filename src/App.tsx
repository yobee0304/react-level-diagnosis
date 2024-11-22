import React, { useState } from 'react';
import { questions } from './data/questions';
import LikertScale from './components/LikertScale';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import { ChevronRight, RotateCcw } from 'lucide-react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  const totalScore = answers.reduce((sum, curr) => sum + curr, 0);
  const maxScore = questions.length * 7;

  if (completed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <ResultCard score={totalScore} maxScore={maxScore} />
          
          <button
            onClick={resetAssessment}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg
              hover:bg-indigo-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-2">
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
          <p className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              {questions[currentQuestion].text}
            </h2>
            <p className="text-gray-600">
              {questions[currentQuestion].description}
            </p>
          </div>

          <LikertScale
            value={answers[currentQuestion] || 0}
            onChange={handleAnswer}
          />

          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors
              ${answers[currentQuestion]
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Complete'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;