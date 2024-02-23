import React, { useEffect } from 'react';
import './App.css';
import { Animals } from './pages/entities/Animals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ResponsiveDrawer from './router/Sidebar';
import { Adopters } from './pages/entities/Adopters';
import { MatchMaking } from './pages/matchmaking';
import { AdopterDetails } from './pages/entities/AdopterDetails';
import { AdoptersData, AnimalsData } from './mock-data';
import { AnimalDetails } from './pages/entities/AnimalDetails';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path={`/`} element={<ResponsiveDrawer />}>
    <Route index path={`matchmaking`} element={<MatchMaking />} />
    <Route path={`adopters`} element={<Adopters />} />
    <Route path={`adopterDetails/:id`} element={<AdopterDetails />} />
    <Route path={`adopterDetails`} element={<AdopterDetails />} />
    <Route path={`animals`} element={<Animals />} />
    <Route path={`animalDetails/:id`} element={<AnimalDetails />} />
    <Route path={`animalDetails`} element={<AnimalDetails />} />
  </Route>
))

function App() {

  useEffect(() => {
    const data = localStorage.getItem('mock-data')
    if (!data) {
      localStorage.setItem('mock-data', JSON.stringify({ AnimalsData, AdoptersData }))
    }
  }, [])


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
