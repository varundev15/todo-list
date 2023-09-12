import React, { useState } from "react";
import styles from "./test.module.scss";

function Index() {
  let [counter,setCounter] = useState<number>(0);
  function incFun(){
    setCounter(counter + 1);
  }
  function decFun(){
    if(counter !== 0){
        setCounter(counter - 1);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.center_box}>
          <h1>{counter}</h1>
          <p>{counter && (counter%2==0) ?  "even" : "odd"}</p>
          <span>
          <button onClick={incFun}>+</button>
          <button onClick={decFun}>-</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Index;
