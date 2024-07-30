import React from "react";
import ReactDOM from "react-dom/client";

const product = "Macbook ";
const model = "Air";
const url =
    "https://file.bodnara.co.kr/logo/insidelogo.php?image=%2Fhttp%3A%2F%2Ffile.bodnara.co.kr%2Fwebedit%2Fnews%2F2010%2F1403651148-mba_12.jpg";

const handleClick = () => {
    alert("곧 도착합니다.");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h1>나만의 {product + model} 주문하기</h1>
        <img src={url} alt="맥북 이미지" />
        <button onClick={handleClick}>확인</button>
    </>
);
