import { useState } from "react";

export default function InitiatePage() {
  const [code, setCode] = useState("");
  const [validated, setValidated] = useState(null);
  const [terms, setTerms] = useState({
    duress: false,
    refund: false,
    silence: false,
    soft: false,
  });
  const [archetype, setArchetype] = useState("");

  const fakeValidate = () => {
    setValidated(code.trim().toLowerCase() === "skan2025");
  };

  const allTermsChecked = Object.values(terms).every(Boolean);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
      <h1 className="text-4xl md:text-5xl font-bold text-center glitch">INITIATION PROTOCOL</h1>
      <p className="text-center mt-4 max-w-xl text-gray-400">
        You were invited. That means something. Prove you're not dead weight.
      </p>

      <div className="mt-10 w-full max-w-md space-y-8">
        {/* Code Input */}
        <div>
          <label className="text-sm uppercase text-gray-500">Invitation Code</label>
          <input
            type="text"
            className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={fakeValidate}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Validate
          </button>
          {validated !== null && (
            <p className={`mt-2 ${validated ? "text-green-400" : "text-red-500"}`}>
              {validated ? "Code accepted." : "Invalid code."}
            </p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="text-sm uppercase text-gray-500">Terms of Obedience</label>
          <div className="mt-2 space-y-2">
            {Object.entries(terms).map(([key, val]) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={val}
                  onChange={() => setTerms({ ...terms, [key]: !val })}
                  className="accent-red-600"
                />
                <span className="text-gray-300">
                  {key === "duress" && "I consent to psychological duress."}
                  {key === "refund" && "I understand there is no refund."}
                  {key === "silence" && "I will not speak about the Red Room."}
                  {key === "soft" && "I am not soft."}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Archetype Dropdown */}
        <div>
          <label className="text-sm uppercase text-gray-500">Choose Your Archetype</label>
          <select
            className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded"
            value={archetype}
            onChange={(e) => setArchetype(e.target.value)}
          >
            <option value="">-- Select One --</option>
            <option value="observer">The Observer</option>
            <option value="catalyst">The Catalyst</option>
            <option value="revenant">The Revenant</option>
          </select>
        </div>

        {/* Stripe Button */}
        <div>
          <a
            href="https://buy.stripe.com/test_a1b2c3d4e5f6g7h8"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center py-2 px-4 rounded bg-red-700 hover:bg-red-800 transition ${
              validated && allTermsChecked && archetype ? "" : "opacity-40 pointer-events-none"
            }`}
          >
            Unlock the Chamber
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-20 text-xs text-gray-600 glitch">
        Once you enter, we own your weekends.
      </p>

      <style jsx>{`
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: red;
          clip: rect(0, 900px, 0, 0);
          animation: glitch 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          color: cyan;
          animation-delay: 1s;
        }
        @keyframes glitch {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
          }
          20% {
            clip: rect(12px, 9999px, 64px, 0);
          }
          40% {
            clip: rect(52px, 9999px, 74px, 0);
          }
          60% {
            clip: rect(32px, 9999px, 44px, 0);
          }
          80% {
            clip: rect(22px, 9999px, 34px, 0);
          }
          100% {
            clip: rect(12px, 9999px, 14px, 0);
          }
        }
      `}</style>
    </div>
  );
}
