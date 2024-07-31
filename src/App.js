import React, { useState } from "react";
import Board from "./Board";
import Button from "./Button";

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
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory} />
                <Board name="상대" color="red" gameHistory={otherHistory} />
            </div>
        </div>
    );
};

export default App;
