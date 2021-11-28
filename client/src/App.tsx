import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ Layout }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
