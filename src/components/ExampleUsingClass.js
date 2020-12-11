import React from "react";

class ExampleUsingClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.changeTime();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    changeTime() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className="clock">
                <h1>Using class.</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ExampleUsingClass;
