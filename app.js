// чтобы добавить элементу свойства, всатавляем его свойства в литерал {}
let image = React.createElement("img", { src: "img/react.png" });
// создаем React-элемент: тег, свойства, содержимое элемента
let title = React.createElement("h1", null, "React");
let subtitle = React.createElement("p", null, "Библиотека для создания пользовательских интейфейсов");
let container = React.createElement("div", { className: "container" }, image, title, subtitle);
// выводим созданный элемент на страницу
ReactDOM.render(container, document.getElementById("root"));