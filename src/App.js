import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <br />
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder=" Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { text: toDo, id: Date.now(), status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((data) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(data);
                    setTodos(
                      toDos.filter((data2) => {
                        if (data2.id === data.id) {
                          data2.status = e.target.checked;
                        }
                        return data2;
                      })
                    );
                  }}
                  value="data.status"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{data.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={(e) => {
                    setTodos(
                      toDos.filter((data3) => {
                        if (data3.id === data.id) {
                          data3 = e.target.value;
                        }
                        return data3;
                      })
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <div className="tickdiv">
          <h2>Completed tasks</h2>
          <br />
          {toDos.map((data2) => {
            if (data2.status) {
              return (
                <h4>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  {data2.text}
                </h4>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
