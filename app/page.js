"use client";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-cover bg-center bg-black"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url('/bg.jpg')"}}
    >
      <div className="spacer"></div>
      <div className="prose flex-col items-center text-center justify-center text-slate-200">
        <div className="badge badge-neutral text-white">
          Try To Beat Today's Highscore 🏀
        </div>
        <h1 className="mt-8 text-white">Welcome to HoopStats!</h1>
        <h2 className="text-white">Who has had the better season?</h2>
        <p className="text-white">
          HoopStats is an online game where you choose higher or lower on NBA
          players' season stats. Think you know basketball? Put your knowledge
          to the test and challenge your friends to see who reigns supreme in
          NBA trivia!
        </p>
        <div className="flex justify-center">
          <button className="btn mx-2 text-slate-200">Easy Mode</button>
          <button className="btn mx-2 bg-red-600 text-slate-200">Hard Mode</button>
        </div>
      </div>
      <div className="flex space-x-4 scale-75 mb-8">
        <div className="stats stats-vertical lg:stats-horizontal shadow text-white ">
          <div className="stat">
            <div className="text-white stat-title">Plays</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          <div className="stat">
            <div className="text-white stat-title">Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="text-white stat-title">All-Time High Score</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </main>
  );
}
