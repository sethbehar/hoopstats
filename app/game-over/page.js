"use client"
import React from 'react';
import { useEffect, useState } from 'react';

const ScorePage = () => {
  const [round, setRound] = useState(1);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const round = query.get('round');
    setRound(round ? parseInt(round, 10) : 1);
  }, []);

  const handlePlayAgain = () => {
    window.location.href = '/play';
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-700 justify-center items-center text-center'>
      <h1 className='text-3xl font-bold text-white'>Game Over!</h1>
      <p className='text-xl text-white mt-4'>Your Score: <span className='text-orange-500'>{round}</span></p>
      <button
        className="mt-6 py-2 px-4 bg-orange-500 text-white font-bold rounded hover:bg-orange-700 transition duration-200 ease-in-out"
        onClick={handlePlayAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default ScorePage;
