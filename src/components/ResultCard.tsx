import React from 'react';
import { Activity, Brain, Zap } from 'lucide-react';

interface ResultCardProps {
  score: number;
  maxScore: number;
}

export default function ResultCard({ score, maxScore }: ResultCardProps) {
  const percentage = (score / maxScore) * 100;
  let level = '';
  let icon = null;
  let color = '';

  if (percentage < 50) {
    level = 'Beginner';
    icon = <Activity className="w-8 h-8" />;
    color = 'text-blue-600';
  } else if (percentage < 75) {
    level = 'Intermediate';
    icon = <Brain className="w-8 h-8" />;
    color = 'text-purple-600';
  } else {
    level = 'Advanced';
    icon = <Zap className="w-8 h-8" />;
    color = 'text-yellow-600';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className={`${color}`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold">Your Results</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <p className="text-gray-600 mb-2">Overall Score</p>
          <div className="text-4xl font-bold">{score}/{maxScore}</div>
        </div>
        
        <div>
          <p className="text-gray-600 mb-2">Skill Level</p>
          <div className={`text-2xl font-bold ${color}`}>{level}</div>
        </div>
        
        <div className="pt-4 border-t">
          <p className="text-gray-600">
            {level === 'Beginner' && "You're starting your journey in reactive skills. Focus on building foundational awareness and response times."}
            {level === 'Intermediate' && "You show strong reactive capabilities. Continue developing your multi-tasking and quick decision-making skills."}
            {level === 'Advanced' && "Exceptional reactive abilities! You excel in quick responses and adaptability under pressure."}
          </p>
        </div>
      </div>
    </div>
  );
}