import React from 'react';
import './App.css';
import { Button, Typography } from '@mui/material';
import Home from './app/Pages';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './app/Store/App/common/selectors';
import { setCount } from './app/Store/App/common/slice';

const App = () => {
  
  const count = useSelector(selectCount)
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(setCount(count+1));
  }
  const handleSub = () => {
    dispatch(setCount(count-1));
  }
  return (
    <div className="App">
      <Home />
      <div className="py-4"> {/*  Tailwind class */}
        <Button variant="outlined">Let's Start</Button>
      </div>
      <Typography variant="h4" >
        Test redux
      </Typography>
      <div className="py-4 space-x-4"> {/*  Tailwind class */}
        <Button variant="outlined" className="font-extrabold" onClick={handleAdd} value="add"><Typography variant="h4" > + </Typography></Button>
        <Button variant="outlined" className="font-extrabold" onClick={handleSub} value="sub"><Typography variant="h4" > - </Typography></Button>
      </div>
      <Typography variant="h4" >
        {count}
      </Typography>
    </div>
  );
}

export default App;
