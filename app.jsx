//JSX - расширение Javascript синтаксиса, 
// очень похожее на html
// например React.createElement("h1", null, "React");
// будет таким:
// <h1>React</h1>
// а 
// React.createElement("div", { className: "container" }, 
//     React.createElement("img", { src: "img/react.png" }),
//     React.createElement("h1", null, "React"), 
//     React.createElement("p", null, "Библиотека для создания пользовательских интейфейсов") 
// );
// будет выглядеть просто так:
// <div className="container">
//    <img src="img/react.png" alt="react"/>
//    <h1>React</h1>
//    <p>Библиотека для создания пользовательских интейфейсов</p>
// </div>

// переход из jsx в js переходит с помощью Babel

// вместо настройки Babel (в реальном проекте нужно это делать)
// создаем скрипт, с помощью которого JSX будет транспилироваться в JS
// прямо на-ходу:

// создаем переменную с содержимым в виде разметки
var jsx = 
<div className="container">
   <img src="img/react.png" alt="react"/>
   <h1>React</h1>
   <p>Библиотека для создания пользовательских интейфейсов</p>
</div>;

ReactDOM.render(jsx, document.getElementById("root"));

