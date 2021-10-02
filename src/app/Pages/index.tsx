import React, { useState } from 'react'
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from '../Store/App/common/selectors';
import { setCount } from '../Store/App/common/slice';

function Home() {
    const [buttonText, setButtonText] = useState("Let's Start")
    const count = useSelector(selectCount)
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(setCount(count + 1));
    }
    const handleSub = () => {
        dispatch(setCount(count - 1));
    }

    function dummyWidget() {
        return (
            <>
                <div className="py-4"> {/*  Tailwind class */}
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
                    <Button variant="outlined" onClick={() => buttonText === "Let's Start" ? setButtonText("From One day .. to Day 1") : setButtonText("Let's Start")}>{buttonText}</Button>
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
            </>
        )
    }
    return (
        <div className="my-3">
            {/* /Student and /Teacher Folders will contain User Specific Modules */}
            <Typography variant="h3" >
                Home
            </Typography>
            {dummyWidget()}
        </div>
    )
}

export default Home
