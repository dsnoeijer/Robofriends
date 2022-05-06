import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundary";
import '../assets/css/App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            userbot: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userbot !== this.state.userbot) {
            this.setState({ robots: this.state.userbot })
        }
    }


    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        })
    }

    addRobot = () => {
        const addRobot = document.getElementById("addbot").value;
        this.setState({
            userbot:
                [{
                    name: addRobot,
                    email: '',
                    id: addRobot
                }]
        })
    }

    resetRobots = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        return (
            <div className="tc">
                <div id="wrap">
                    <h1>RoboDex</h1>
                    <div>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                </div>
                <Scroll>
                    <ErrorBoundry>
                        <div className="ma2 white">
                            <h3>Enter your name to find your Robot Alter-Ego...</h3>
                            <input id="addbot" type="text" />
                            <button onClick={this.addRobot}>Check</button>
                            <button onClick={this.resetRobots}>Reset</button>
                        </div>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;