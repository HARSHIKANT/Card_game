// App.jsx
import React from 'react';
import Card from './components/Card';
import players from "./data/players"

function App() {
  return (
<div className="w-full min-h-screen bg-slate-900 px-4 py-6 flex flex-col items-center justify-start gap-8">

    <div className="w-full fixed bottom-0 bg-blue-900 px-4.5 py-1.5 rounded-2xl mt-96 mx-1">
      <div className="w-full overflow-x-auto py-2 px-1">
        <div className="flex gap-3 w-max mx-auto">
          {players.map((player, index) => (
            <Card key={index}{...player} />
          ))}
        </div>
      </div>
    </div>
</div>
  );
}

export default App;
