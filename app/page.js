"use client";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-black"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.92)), url('/bg.jpg')"}}
    >
      <div className="spacer"></div>
      <div className="prose flex-col items-center text-center justify-center">
        <div className="badge badge-neutral">
          Try To Beat Today's Highscore 🏀
        </div>
        <h1 className="mt-8">Welcome to HoopStats!</h1>
        <h2>Who has had the better season?</h2>
        <p>
          HoopStats is an online game where you choose higher or lower on NBA
          players' season stats. Think you know basketball? Put your knowledge
          to the test and challenge your friends to see who reigns supreme in
          NBA trivia!
        </p>
        <div className="flex justify-center">
          <button className="btn mx-2">Easy Mode</button>
          <button className="btn mx-2">Hard Mode</button>
        </div>
      </div>
      <div className="flex space-x-4 scale-75 mb-8">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Plays</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          <div className="stat">
            <div className="stat-title">Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">All-Time High Score</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </main>
  );
}
