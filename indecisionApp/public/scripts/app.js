'use strict';

console.log('app.js is running');

// JSX - JavaScript XML

var app = {
    title: 'How the Pups Fart',
    subtitle: 'A Tootorial',
    options: ['One']
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
        app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options'
    )
);

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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

var appRoute = document.getElementById('apper');
ReactDOM.render(templateTwo, appRoute);
