import React from "react";
import styles from "./todo.module.scss";

let priorityObj = {
    high:<button style={{color:'#ff9e21',borderColor:'#ff9e21'}}>High</button>,
    medium:<button style={{color:'#41c95f',borderColor:'#41c95f'}}>Medium</button>,
    low:<button style={{color:'#2ccdcd',borderColor:'#2ccdcd'}}>Low</button>
};
let arr = [
    { title: "Todo", color: "#747474" },
    { title: "Doing", color: "#ff9e21" },
    { title: "In Review", color: "#2ccdcd" },
    { title: "Done", color: "#41c95f" },
  ];

function Card({status}:{status:string}) {
  return (
    <div className={styles.card}>
      <div className={styles.pr_wrap}>
         {priorityObj['medium']}
         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      </div>
      <div className={styles.card_Cont}>
        <h4>john wick</h4>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <select name="pets" id="pet-select">
      {
        arr.filter((ele,ind)=>{return ele.title !== status}).map((ele,ind)=>{
           return <option value={ele.title} key={'dd'+ind}>{ele.title}</option>
        })
      }
      </select>
    </div>
  );
}

export default Card;
