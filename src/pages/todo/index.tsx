import React, { useState, createContext, useContext, useReducer } from "react";
import styles from "./todo.module.scss";
import Card from "./card";
import { v4 } from "uuid";

let TodoContext = createContext({});

export interface todosType {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "Doing" | "In Review" | "Done";
  priority: string;
}

function Todo() {
  const [globalTodo, setGlobalTodo] = useState<todosType[]>([]);

  console.log(globalTodo);

  return (
    <>
      <TodoContext.Provider value={{ globalTodo, setGlobalTodo } as any}>
        <div className={styles.main_cont}>
          {status.map((ele, ind) => {
            return (
              <Box key={"ted" + ind} status={ele.title} color={ele.color} />
            );
          })}
        </div>
      </TodoContext.Provider>
    </>
  );
}

let status = [
  { title: "Todo", color: "#747474" },
  { title: "Doing", color: "#ff9e21" },
  { title: "In Review", color: "#2ccdcd" },
  { title: "Done", color: "#41c95f" },
];

interface boxType {
  status: string;
  color: string;
}

function Box({ status, color }: boxType) {
  let [showModal, setModal] = useState<boolean>(false);
  let context = useContext(TodoContext) as any;
  let todos = context.globalTodo as todosType[];

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <h4>{status}</h4>
          <span style={{ background: color }}>
            <p>1</p>
          </span>
        </div>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          +
        </button>
      </div>
      <div className={styles.cards}>
        {todos
          .filter((c) => c.status === status)
          .map((ele, idx) => {
            return <Card data={ele as todosType} key={"card" + idx} />;
          })}
      </div>
      {showModal && (
        <Modal
          currentStatus={status}
          close={() => {
            setModal(false);
          }}
        />
      )}
    </div>
  );
}

interface taskType {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}

function Modal({
  currentStatus,
  close,
}: {
  currentStatus: string;
  close: () => void;
}) {
  let context = useContext(TodoContext) as any;

  const [formState, setformState] = useState<taskType>({
    id: v4() as string,
    title: "",
    description: "",
    priority: "",
    status: currentStatus,
  });

  const submitForm = (e: any) => {
    e.preventDefault();
    context.setGlobalTodo((st: any) => {
      st.push(formState);
      return [...st];
    });
  };

  return (
    <div className={styles.modal}>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className={styles.modal_box}
      >
        <h1>Enter Task Details</h1>
        <label htmlFor="">
          <p>Title</p>
          <input
            required
            value={formState.title}
            onChange={(e) => {
              setformState((f) => {
                f.title = e.target.value;
                return { ...f };
              });
            }}
            type="text"
            name=""
            id=""
          />
        </label>
        <label htmlFor="">
          <p>Description</p>
          <textarea
            required
            value={formState.description}
            onChange={(e) => {
              setformState((f) => {
                f.description = e.target.value;
                return { ...f };
              });
            }}
            rows={10}
            name=""
            id=""
          />
        </label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setformState((f) => {
              f.priority = e.target.value;
              return { ...f };
            });
          }}
        >
          {Object.keys(priorityObj).map((ele) => {
            return (
              <option key={ele + "opt"} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            close();
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
}

let priorityObj = {
  high: (
    <button style={{ color: "#ff9e21", borderColor: "#ff9e21" }}>High</button>
  ),
  medium: (
    <button style={{ color: "#41c95f", borderColor: "#41c95f" }}>Medium</button>
  ),
  low: (
    <button style={{ color: "#2ccdcd", borderColor: "#2ccdcd" }}>Low</button>
  ),
};

export default Todo;
