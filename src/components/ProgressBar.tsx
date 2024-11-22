import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5">
      <div
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}