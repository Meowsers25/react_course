console.log('app.js is running')

// JSX - JavaScript XML

let app = {
    title: 'How the Pups Fart',
    subtitle: 'A Tootorial'
}

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        
    </div>
)

let user = {
    name: 'Luna',
    age: 6,
    location: 'Providence'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}
let userName = 'Katie Nichols'
let userAge = 35
let userLocation = 'Providence'

let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
        
    </div>
)

let appRoute = document.getElementById('apper')
ReactDOM.render(templateTwo, appRoute)