// App.jsx
import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="w-full bg-blue-900 px-4.5 py-1.5 rounded-2xl mt-96 mx-4">
      <div className="w-full overflow-x-auto py-2 px-1">
        <div className="flex gap-3 w-max mx-auto">
          {[...Array(12)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
