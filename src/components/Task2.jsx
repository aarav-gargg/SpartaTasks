import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Task2 = () => {
  const [activeCard, setActiveCard] = useState(null); 
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Card 1',
      content: 'This is the content for Card 1. It contains details specific to this card.',
    },
    {
      title: 'Card 2',
      content: 'This is the content for Card 2. It provides information relevant to this card.',
    },
    {
      title: 'Card 3',
      content: 'This is the content for Card 3. Here you will find the details for this card.',
    },
    {
      title: 'Card 4',
      content: 'This is the content for Card 4. More information about this card can be found here.',
    },
  ];

  const handleClick = (index) => {
    setActiveCard(activeCard === index ? null : index); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-800 text-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Interactive Card Display</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={`cursor-pointer transition-transform duration-300 rounded-lg shadow-lg 
              ${activeCard === index ? 'h-72 w-72 bg-slate-200 border-cyan-400' : 'h-48 w-48 bg-white scale-95'}`}
          >
            <div className="text-slate-700 text-center flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-slate-600 mb-4">{card.title}</h3>
              {activeCard === index && <p className="font-semibold">{card.content}</p>}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        className="fixed bottom-5 right-5 bg-slate-950 text-white py-2 px-4 rounded-full shadow-lg hover:bg-slate-800 transition-colors duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Task2;
