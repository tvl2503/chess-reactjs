import React, { useEffect, useState } from "react";
import ChessBoardWrapper from "../../components/ChessBoardWrapper";
import { Container } from "@mui/material";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import "./Board.scss";
Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
      var that = this;
      return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
          return that.slice(i*chunkSize,i*chunkSize+chunkSize);
      });
  }
});
const Board = () => {
  const [fen, setFen] = useState("");
  const [history, setHistory] = useState([]);
  const {currentUser} = useSelector(state => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if(!currentUser) 
    navigate('/auth/login')
  },[])
  const newGame = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/game");
      setFen(res.data.fen);
      setHistory([])
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    newGame();
  }, []);
  const undoGame = async() => {
    try{
        const res = await axios.post("http://localhost:5000/api/undo");
        if (res.data.fen) {
            setFen(res.data.fen);
            setHistory(res.data.history)
          }
    }
    catch(err){
      console.log(err);

    }
  }
  const handlePieceDrop = async (sourceSquare, targetSquare) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/move",
        {},
        { params: { move: `${sourceSquare}${targetSquare}` } }
      );
      if (res.data.fen) {
        setFen(res.data.fen);
        setHistory(res.data.history)
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  return (
    <Container>
      <div className="board">
        <div className="board--left">

        <ChessBoardWrapper fen={fen} handlePieceDrop={handlePieceDrop} />
        </div>
        <div className="board--right">
            <div className="button">

            <button onClick={() =>undoGame()}>Undo</button>
            <button onClick={() => newGame()}>New Game</button>
            </div>
            <div className="history">

              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell>
                          White
                        </TableCell>
                        <TableCell>
                          Black
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    history.length > 0 && history.chunk(2).map((item, index) => (
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item[0]}</TableCell>
                        <TableCell>{item[1] ? item[1] : ''}</TableCell>
                      </TableRow>
                    ))
                    
                  }
                    </TableBody>
                  </Table>
              </TableContainer>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default Board;
