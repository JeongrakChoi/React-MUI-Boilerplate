import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Mui */
import { ButtonGroup, Button, Slider } from '@mui/material';

const Home = () => {
  return (
    <>
      <div className="container">
        <Slider defaultValue={30} className="slider" />

        <Button variant="contained">BUTTON</Button>

        <br />
        <br />

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Home;
