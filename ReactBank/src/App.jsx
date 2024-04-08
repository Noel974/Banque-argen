import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../src/Styles/App.css';

import Nav from './Components/Nav/Nav';
import Routex from'./Routes/Routex';
import Footer from './Components/Footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Ajoutez cet état pour gérer l'authentification

  return (
    <BrowserRouter>
      <Nav isAuthenticated={isAuthenticated} /> {/* Passez l'état isAuthenticated en tant que prop */}
      <Routex setIsAuthenticated={setIsAuthenticated} /> {/* Passez la fonction setIsAuthenticated pour mettre à jour l'état depuis les composants enfants */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
