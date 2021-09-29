import React, { useState } from 'react';
import './App.css';
import { Button, Typography } from '@mui/material';
import Home from './app/Pages';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './app/Store/App/common/selectors';
import { setCount } from './app/Store/App/common/slice';
import FloatingNav from './app/Navigations/FloatingNav';
import NavMenu from './app/Navigations/FloatingNav/NavMenu';

const App = () => {
  const [buttonText, setButtonText] = useState("Let's Start")
  const count = useSelector(selectCount)
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(setCount(count+1));
  }
  const handleSub = () => {
    dispatch(setCount(count-1));
  }
  return (
  <React.Fragment>
    <FloatingNav show={true}/>
    <NavMenu show={true}/>
    <div className="py-4"></div>
      <div className="App">
        <Home />
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
        <div className="py-4"> {/*  Tailwind class */}
          <Button variant="outlined" onClick={()=> buttonText==="Let's Start" ? setButtonText("From One day .. to Day 1"): setButtonText("Let's Start")}>{buttonText}</Button>
        </div>
        <Typography variant="h4" >
          Test redux
        </Typography>
        <div className="py-4 space-x-4"> {/*  Tailwind class */}
          <Button variant="outlined" className="font-extrabold" onClick={handleAdd}><Typography variant="h4" > + </Typography></Button>
          <Button variant="outlined" className="font-extrabold" onClick={handleSub}><Typography variant="h4" > - </Typography></Button>
        </div>
        <Typography variant="h4" >
          {count}
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default App;
