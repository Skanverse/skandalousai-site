export default function Deathwish() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center font-mono">
      <h1 className="text-4xl md:text-6xl text-red-600">YOU WERE SUMMONED</h1>
      <p className="mt-4 text-lg max-w-xl text-center text-gray-300">
        Access to Deathwish is not granted. It is taken. Whisper the code or leave in silence.
      </p>
      <a href="/initiation" className="mt-8 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl transition">
        I Have Been Chosen
      </a>
    </div>
  );
}
