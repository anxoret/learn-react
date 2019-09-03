// чтобы добавить элементу свойства, всатавляем его свойства в литерал {}
let image = React.createElement("img", { src: "img/react.png" });
// создаем React-элемент: тег, свойства, содержимое элемента
let title = React.createElement("h1", null, "React");
let subtitle = React.createElement("p", null, "Библиотека для создания пользовательских интейфейсов");
let container = React.createElement("div", { className: "container" }, image, title, subtitle);
// выводим созданный элемент на страницу
ReactDOM.render(container, document.getElementById("root"));

// скачиваем и устанавливаем приложение для средств работчика React в Google Chrome и Firefox:
// https://fb.me/react-devtools
// это приложение работает только когда веб-приложение запущено через web-server

// установка http-server'a:
// всё написано у меня в тетради по Установке Node.js