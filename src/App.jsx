import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

function AppLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
      <Route path="/task3" element={<Task3 />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
