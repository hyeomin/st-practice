// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 0,
            title: "",
            body: "",
            isDone: false,
        },
    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // // item으로 todoList 객체 접근

    const onChangeTitle = function (event) {
        setTitle(event.target.value);
    };

    const onChangeBody = function (event) {
        setBody(event.target.value);
    };

    const onSubmitHandler = function (event) {
        event.preventDefault();
        const newTodo = {
            id: todoList.length + 1,
            title: title,
            body: body,
            isDone: false,
        };
        setTodoList([...todoList, newTodo]);
    };

    const removeBtnHandler = function (id) {
        const removedArr = todoList.filter(function (item) {
            return item.id !== id;
        });
        setTodoList(removedArr);
    };

    const doneBtnHandler = function (id) {
        const newArr = todoList.map(function (item) {
            if (item.id === id) {
                return { ...item, isDone: true };
            }
            return item;
        });
        setTodoList(newArr);
    };

    const cancelBtnHandler = function (item) {
        const newArr = todoList.map(function (id) {
            if (item.id === id) {
                return { ...item, isDone: false };
            }
            return item;
        });
        setTodoList(newArr);
    };

    return (
        <div>
            <header>My To-do List</header>
            <form className="submit-form" onSubmit={onSubmitHandler}>
                제목:
                <input
                    className="title"
                    value={title}
                    onChange={onChangeTitle}
                />
                내용:
                <input className="body" value={body} onChange={onChangeBody} />
                <button>추가하기</button>
            </form>
            <div className="todo-list">
                <div className="working">Working</div>
                {todoList
                    .filter(function (item) {
                        return item.isDone === false;
                    })
                    .map(function (item) {
                        return (
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <button
                                    onClick={() => removeBtnHandler(item.id)}
                                >
                                    삭제하기
                                </button>
                                <button onClick={() => doneBtnHandler(item.id)}>
                                    {item.isDone ? "취소" : "완료"}
                                </button>
                            </div>
                        );
                    })}
                <div className="working">Done</div>
                {todoList
                    .filter(function (item) {
                        return item.isDone === true;
                    })
                    .map(function (item) {
                        return (
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <button
                                    onClick={() => removeBtnHandler(item.id)}
                                >
                                    삭제하기
                                </button>
                                <button
                                    onClick={() => cancelBtnHandler(item.id)}
                                >
                                    {item.isDone ? "취소" : "완료"}
                                </button>
                            </div>
                        );
                    })}
            </div>
            <footer></footer>
        </div>
    );
}

export default App;
