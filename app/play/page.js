"use client"
import React, { useState, useEffect } from 'react';
const Page = () => {
  const [players, setPlayers] = useState([]);
  const [round, setRound] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await fetch('/api/players');
      const data = await res.json();
      console.log(data)
      setPlayers(data.players);
    } catch (err) {
      setError('Failed to fetch players');
    }
  };

  const handleGuess = (guess) => {
    if (players.length < 2) return; // Ensure there are two players to compare
    const [player1, player2] = players;
    const correctGuess = (guess === 'player1' && parseFloat(player1.PTS) > parseFloat(player2.PTS)) || 
                         (guess === 'player2' && parseFloat(player2.PTS) > parseFloat(player1.PTS));

    if (correctGuess) {
      setRound(round + 1);
      fetchPlayers();  // Get new players for the next round
    } else {
      alert('Game Over! You reached round ' + round);
      setRound(1);
      fetchPlayers();  // Restart the game
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-700 justify-center content-center items-top text-center'>
      <h1 className='text-center text-2xl font-bold'>Current Score: <span className='text-orange-500'>{round}</span></h1>
      <div className='flex flex-row justify-around items-center'>
        {players && players.map((player, index) => (
          <div key={player.Player} className='w-1/2 text-center'>
            <h2 className='text-xl font-semibold'>{player.Player} ({player.Tm})</h2>
            {/* <p>Points per game: {player.PTS}</p>
            <p>Assists per game: {player.AST}</p>
            <p>Rebounds per game: {player.TRB}</p> */}
            <button className="mt-4 py-2 px-4 bg-orange-500 text-white font-bold rounded hover:bg-orange-700 transition duration-200 ease-in-out"
              onClick={() => handleGuess(index === 0 ? 'player1' : 'player2')}>
              {player.Player} has more PPG
            </button>
          </div>
        ))}
        <div className='absolute bottom-0 left-50 min-h-2/5 h-2/5 bg-gray-600 w-1 min-w-1'></div>
        <div className='absolute top-0 left-50 min-h-2/5 h-2/5 bg-gray-600 w-1 min-w-1'></div>
      </div>
    </div>
  );
}

export default Page;
