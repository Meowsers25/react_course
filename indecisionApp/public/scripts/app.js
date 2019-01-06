'use strict';

console.log('app.js is running');

// JSX - JavaScript XML

var app = {
    title: 'How the Pups Fart',
    subtitle: 'A Tootorial'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var user = {
    name: 'Luna',
    age: 6,
    location: 'Providence'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var userName = 'Katie Nichols';
var userAge = 35;
var userLocation = 'Providence';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoute = document.getElementById('apper');
ReactDOM.render(templateTwo, appRoute);
