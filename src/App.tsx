import React from 'react';
import { StoreContext } from './mobx/context';
import { useStore } from './mobx/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/route';

const App = () => {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;