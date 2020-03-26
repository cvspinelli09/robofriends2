import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
          <div>
            <h3>
              {" "}
              {this.state.date.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit"
              })}{" "}
            </h3>
          </div>
        );
    }
}

export default Clock;