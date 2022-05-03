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
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        })
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
                <h1 className="f1">RoboDex</h1>
                <div className="tc">
                    <SearchBox searchChange={this.onSearchChange} />
                </div>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;