import React from 'react';
import './App.css';
import NavbarRoutes from './app/Navigations/FloatingNav/NavbarRoutes';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const App = () => {
  const queryClient = new QueryClient()



  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <NavbarRoutes /> 
        </div>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;

