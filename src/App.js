import React, { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import logo from "./assets/logo.png";
import "./App.css";

const random = (n) => {
    return Math.ceil(Math.random() * n);
};

const App = () => {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setGameHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]);
        setGameHistory([]);
    };

    return (
        <div className="App">
            <img className="App-logo" src={logo} alt="주사위 로고" />
            <h1 className="App-title">주사위게임</h1>
            <div>
                <Button
                    className="App-button"
                    color="blue"
                    onClick={handleRollClick}
                >
                    던지기
                </Button>
                <Button
                    className="App-button"
                    color="red"
                    onClick={handleClearClick}
                >
                    처음부터
                </Button>
            </div>
            <div className="App-boards">
                <Board
                    name="나"
                    color="blue"
                    gameHistory={myHistory}
                    className={`App-board`}
                />
                <Board
                    name="상대"
                    color="red"
                    gameHistory={otherHistory}
                    className="App-board"
                />
            </div>
        </div>
    );
};

export default App;
