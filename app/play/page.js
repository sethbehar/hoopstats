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
    <div className='min-h-screen '>
      <h1>Round: {round}</h1>
      <div className='flex flex-row justify-around items-center'>
        {players && players.map((player, index) => (
          <div key={player.Player} className='w-1/2 text-center'>
            <h2>{player.Player} ({player.Tm})</h2>
            <p>Points per game: {player.PTS}</p>
            <p>Assists per game: {player.AST}</p>
            <p>Rebounds per game: {player.TRB}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
              onClick={() => handleGuess(index === 0 ? 'player1' : 'player2')}>
              Guess Higher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
