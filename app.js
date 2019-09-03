function Hero(props) {
    return (
        React.createElement('div', { className: 'container' }, 
            React.createElement('img', { src: props.imageUrl }),
            React.createElement('h1', null, props.title),
            React.createElement('p', null, props.subtitle)
        )
    );
}

var hero = React.createElement(Hero, { title: 'React',
                                       subtitle: 'Библиотека для создания пользовательских интерфейсов',
                                       imageUrl: 'https://facebook.github.io/react/img/logo.svg' });

ReactDOM.render(hero, document.getElementById('root'));