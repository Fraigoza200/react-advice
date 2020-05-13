import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {

    state = { advice: ''}

    componentDidMount() {
        // Remember to use the 'this' syntax since we are using state based components

        this.fetchAdvice()
    }
    
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                const { advice } = res.data.slip 

                // setting the state in order to populate the screen with advice 

                this.setState({ advice })
            })
            .catch(e => console.error(e))

    }

    render() {
        return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{this.state.advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span>Get Advice</span>
                </button>
            </div>
        </div>
        )
    }
}

export default App