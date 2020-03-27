import React from 'react';
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Clock from '../components/Clock';
import Header from '../components/Header';

import { setSearchField, requestRobots } from '../actions'; 

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}


class App extends React.Component {
    componentDidMount() {
      this.props.onRequestRobots();
    }

    render() {
      const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase());
        });
        return isPending ? 
        <h1>Loading</h1> :
        (
          <div className="tc">
            <Header />
            <Clock />
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);