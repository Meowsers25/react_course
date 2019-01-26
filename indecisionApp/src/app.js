console.log('app.js is running')

// JSX - JavaScript XML

const app = {
    title: 'How the Pups Fart',
    subtitle: 'A Tootorial',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
)
const appRoute = document.getElementById('apper')
ReactDOM.render(template, appRoute)

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
