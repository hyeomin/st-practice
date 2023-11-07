// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

function App() {
    const [todoList, stateTodoList] = useState([
        {
            id: 0,
            title: "",
            body: "",
            isDone: false,
        },
    ]);

    const [title, stateTitle] = useState("");
    const [body, stateBody] = useState("");

    // // item으로 todoList 객체 접근

    const onChangeHandler = function (event) {
        stateTitle(event.target.value);
        stateBody(event.target.value);
    };

    const onSubmitHandler = function () {
        const addArr = todoList.map(function (item) {
            return {
                id: todoList.length + 1,
                title: item.title,
                body: item.body,
                isDone: false,
            };
        });
        stateTodoList(...todoList, addArr);
    };

    const removeBtnHandler = function () {
        const removedArr = todoList.filter(function (id) {
            return item.id !== id;
        });
        stateTodoList(removedArr);
    };

    const doneBtnHandler = function (item) {
        const newArr = todoList.map(function (id) {
          if (item.id === id) {
            return (...item, isDone = true)
          }
          return newArr
        });
        stateTodoList(newArr)
    };

    const cancelBtnHandler = function (item) {
      const newArr = todoList.map(function(id) {
        if (item.id === id) {
          return(...item, isDone = false)
        }
      })
      stateTodoList(newArr)
    }

    return (
        <div>
            <header>My To-do List</header>
            <form className="submit-form" onSubmit={onSubmitHandler}>
                <input
                    className="title"
                    value={todoList.title}
                    onChange={onChangeHandler}
                />
                <input
                    className="body"
                    value={todoList.body}
                    onChange={onChangeHandler}
                />
                <button>추가하기</button>
            </form>
            <div className="todo-list">
                <div className="working">Working</div>
                <div className="working-card">
                  {/* {todoList.filter(function() {
                    return item.isDone = false
                  }).map(function() {
                    return (
                      // <h3>{item.title}</h3>
                      // <p>{item.body} </p>
                    )
                  })
                  } */}
                    <button onClick={removeBtnHandler}></button>
                    <button onClick={doneBtnHandler}>완료</button>
                </div>
                <div className="done">Done</div>
                    <button onClick={removeBtnHandler}>삭제하기</button>
                    <button onClick={cancelBtnHandler}>취소</button>
            </div>
            <footer></footer>
        </div>
    );
}

export default App;
