import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../src/Styles/App.css';
import Nav from './Components/Nav/Nav';
import Routex from'./Routes/Routex';
import Footer from './Components/Footer/Footer';

// Import du magasin Redux
import { store } from './Redux/Store/Store'; 
function App() {

  return (
    <BrowserRouter>
     <Provider store={store}>
     <Nav/> 
      <Routex/> 
      <Footer/>
     </Provider>
    </BrowserRouter>
  );
}

export default App;
