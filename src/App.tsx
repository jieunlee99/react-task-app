// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { appContainer, board } from "./App.css";

function App() {
  return (
    <div className={appContainer}>
      <div className={board}></div>
      <div>
        <button>이 게시판 삭제하기</button>
        <button>이 게시판 삭제하기</button>
      </div>
    </div>
  );
}

export default App;
