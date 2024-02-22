import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='counter'>
        <Stack direction='row' spacing={0.15}>
            <Button onClick={() => dispatch(decrement())} variant='contained' color='inherit'>Decrement</Button>
            <Button variant='contained' color='inherit'>{count}</Button>
            <Button onClick={() => dispatch(increment())} variant='contained' color='inherit'>Increment</Button>
        </Stack>
        
    </div>
  )
}

export default Counter