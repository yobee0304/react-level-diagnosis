import React from 'react';

interface LikertScaleProps {
  value: number;
  onChange: (value: number) => void;
}

export default function LikertScale({ value, onChange }: LikertScaleProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Needs Improvement</span>
        <span>Excellent</span>
      </div>
      <div className="flex justify-between gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`w-12 h-12 rounded-full transition-all transform hover:scale-110
              ${value === rating 
                ? 'bg-indigo-600 text-white scale-110' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
}