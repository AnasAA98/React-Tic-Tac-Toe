 import React, { useRef, useState } from 'react'
 import './TicTacToe.css'
 import Circle_icon from '../Assets/O.png'
 import X_icon from '../Assets/X.png'
 
 let data =["","","","","","","","",""];
 
 export const TicTacToe = () => {
  
  let [count,setCount] = useState(0);
  let [lock,setlock] = useState(false);
  let titleRef = useRef(null);
  let box1 =useRef(null);
  let box2 =useRef(null);
  let box3 =useRef(null);
  let box4 =useRef(null);
  let box5 =useRef(null);
  let box6 =useRef(null);
  let box7 =useRef(null);
  let box8 =useRef(null);
  let box9 =useRef(null);
  
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


  const toggle = (e, num) => {
    if (lock || data[num] !== "") { // Check if game is locked or box already filled
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${X_icon}'>`;
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src='${Circle_icon}'>`;
      data[num] = "O";
    }
    setCount(count+1); // Increment count here to ensure it's done regardless of the if/else outcome
    checkWin();
  };

  const checkWin = () => {
    // Define all possible winning combinations
    const winConditions = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal top-left to bottom-right
      [2, 4, 6], // Diagonal top-right to bottom-left
    ];
  
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[c]); // Assuming won() is a function that handles the win condition
        return; // Exit the function once a win has been found
      }
    }
  };

  const won =(winner)=>{
    setlock(true);
    if(winner==="X"){
      titleRef.current.innerHTML=`Congratulations: <img src=${X_icon}> Wins`;
    }
    else{
      titleRef.current.innerHTML=`Congratulations: <img src=${Circle_icon}> Wins`;
    }
  }
  const reset = () => {
    setlock(false);
     data =["","","","","","","","",""];
     titleRef.current.innerHTML='Tic-Tac-Toe Game In <span>React</span>';
     
     box_array.map((e) => {
       
      e.current.innerHTML= "";
     })
  }
  
  return (
     <div className='container'>
        <h1 className="title" ref={titleRef}> Tic-Tac-Toe Game In <span>React</span></h1>
        <div className="board">
          <div className="row1">
            <div className="boxes" ref={box1} onClick={ (e)=>{ toggle(e,0)}}></div>
            <div className="boxes" ref={box2} onClick={ (e)=>{ toggle(e,1)}}></div>
            <div className="boxes" ref={box3} onClick={ (e)=>{ toggle(e,2)}}></div>
          </div>
          <div className="row2">
            <div className="boxes" ref={box4} onClick={ (e)=>{ toggle(e,3)}}></div>
            <div className="boxes" ref={box5} onClick={ (e)=>{ toggle(e,4)}}></div>
            <div className="boxes" ref={box6} onClick={ (e)=>{ toggle(e,5)}}></div>
          </div>
          <div className="row3">
            <div className="boxes" ref={box7} onClick={ (e)=>{ toggle(e,6)}}></div>
            <div className="boxes" ref={box8} onClick={ (e)=>{ toggle(e,7)}}></div>
            <div className="boxes" ref={box9} onClick={ (e)=>{ toggle(e,8)}}></div>
          </div>
        </div>
        <button className="reset" onClick={()=>{reset()}}> Reset</button>

     </div>
   )
 }
 
 