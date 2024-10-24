import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Frontend Developer Technical Evaluation</h1>
      </header>
     
      <main className="max-w-5xl mx-auto mt-12 px-4">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          <NavLink to="/task1" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 hover:border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Task 1: Fetching Data</h3>
            <p className="text-gray-600">Create a function that fetches data from a public API and displays it in a styled list.</p>
          </NavLink>

          <NavLink to="/task2" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 hover:border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Task 2: Interactive Card Display</h3>
            <p className="text-gray-600">Implement cards where only one card's content is visible at a time. Toggle between cards smoothly.</p>
          </NavLink>

          <NavLink to="/task3" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 hover:border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Task 3: Candidate Registration Form</h3>
            <p className="text-gray-600">Design a dynamic form that captures candidate information with validation and interactive features.</p>
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
