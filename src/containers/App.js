import React from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Clock from '../components/Clock';
// import { robots } from './robots';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
          robots: [],
          searchfield: ""
        };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
          return robot.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        });
        return (
          <div className="tc">
            <h1>RobotFriends</h1>
            <Clock />
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
        );
    }
    
}

export default App;