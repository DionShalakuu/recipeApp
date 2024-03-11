import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AddRecipeModal from './components/modals/addRecipte';
import { useState } from 'react';
import SinglePage from './pages/homepage/singlePage';
import Favorites from './pages/favorite/favorites';
import Ingredient from './components/ingredient/ingredient';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };
  return (
    <div className="container">
      <Header />
      <AddRecipeModal showModal={isModalOpen} closeModal={closeModal} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="recipe/:id" element={<SinglePage />} />
        <Route exact path="favorites" element={<Favorites />} />
        <Route exact path="ingredient" element={<Ingredient />} />

      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
      <button className="btn btn-primary add-recipe-button" onClick={openModal}>+</button>
    </div>
  );
}

export default App;
