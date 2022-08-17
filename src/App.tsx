import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const Home = lazy(() => import('./pages/home'));
const Trivia = lazy(() => import('./pages/trivia'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={'Cargando...'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
