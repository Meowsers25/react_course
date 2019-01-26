'use strict';

console.log('app.js is running');

// JSX - JavaScript XML

var app = {
    title: 'How the Pups Fart',
    subtitle: 'A Tootorial',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    ),
    React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);
var appRoute = document.getElementById('apper');
ReactDOM.render(template, appRoute);

// let userName = 'Katie Nichols'
// let userAge = 35
// let userLocation = 'Providence'

// const user = {
//     name: 'Luna',
//     age: 26,
//     location: 'Providence'
// }

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>
//     }
// }

//h1 with ternary operator
// ? means true? then it returns : means else return
//logical and for the age
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name: 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}

//     </div>
// )
