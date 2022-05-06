import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundary";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import '../assets/css/App.css';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            userbot: []
        }
    }

    componentDidMount() {
        // console.log(this.props.store.getState())
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
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        return (
            <div className="tc">
                <div id="wrap">
                    <h1>RoboDex</h1>
                    <div>
                        <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);