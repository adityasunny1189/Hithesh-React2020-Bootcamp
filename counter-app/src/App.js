import React, {useState} from 'react';
import './styles.css'

function App() {
    const [count, setCount] = useState(0) 

    return (
        <div className = 'App'>
            <header>
                <h1>Counter App using State/hooks</h1>
            </header>
            <h2>Count: {count}</h2>
            <button onClick = {() => setCount(0)}>Reset</button>
            <button onClick = {() => (count >= 10 ? '' : setCount(count + 1))}>Increment</button>
            <button onClick = {() => (count >= 1 ? setCount(count - 1) : '')}>Decrement</button>
        </div>
    )
}

export default App;




















//Doing the same thing via class 

// import React, {Component} from 'react';
// import './styles.css';

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div className='App'>
//             <header>
//                 <h1>State Counter App using Class</h1>
//             </header>
//             <h2>Count: {this.state.count}</h2>
//             <button onClick = {() => this.setState({count: 0})}>Reset</button>
//             <button onClick = {() => this.setState({count: this.state.count + 1})}>Increment</button>
//             <button onClick = {() => this.setState({count: this.state.count - 1})}>Decrement</button>
//             </div>
//         )
//     }
// }

// export default App;















