import React, { useState } from "react";
import styles from "./todo.module.scss";
import Card from "./card";

function Todo() {
  let status = [
    { title: "Todo", color: "#747474" },
    { title: "Doing", color: "#ff9e21" },
    { title: "In Review", color: "#2ccdcd" },
    { title: "Done", color: "#41c95f" },
  ];
  return (
    <>
      <div className={styles.main_cont}>
        {status.map((ele, ind) => {
          return <Box key={"ted" + ind} title={ele.title} color={ele.color} />;
        })}
      </div>
    </>
  );
}

interface boxType {
  title: string;
  color: string;
}
function Box({ title, color }: boxType) {
  let [showModal,setModal] = useState<boolean>(false);
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <h4>{title}</h4>
          <span style={{ background: color }}>
            <p>1</p>
          </span>
        </div>
        <button onClick={() =>{setModal(true)}}>+</button>
      </div>
      <div className={styles.cards}>
        <Card status={title}/>
      </div>
      {
        showModal && <Modal currentStatus={title}/>
      }
    </div>
  );
}

function Modal({currentStatus}:{currentStatus:string}){
  return <div className={styles.modal}>
    <div className={styles.modal_box}></div>
  </div>
}

export default Todo;
