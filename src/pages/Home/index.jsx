import React, { useState } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Home.scss";

const Home = () => {
  const [difficult, setDifficult] = useState('');
  const handleChange = (event) => {
    setDifficult(event.target.value);
  };
  return (
    <div className="home">
      <Container>
        <div className="board">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Độ khó</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={difficult}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Độ khó 1</MenuItem>
              <MenuItem value={2}>Độ khó 2</MenuItem>
              <MenuItem value={3}>Độ khó 3</MenuItem>
            </Select>
          </FormControl>
          <Link to="/board">New game</Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
