import React, { PureComponent } from 'react'

let timeCounts = 0;
export default class ExampleCls extends PureComponent {
	timeInterval = null;

	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		}
	}

	componentDidMount() {
		this.timeInterval = setInterval(() => {
			timeCounts = timeCounts + this.state.count;
			this.props.onEffectTest(timeCounts);
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timeInterval);
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<p>You clicked {count} times</p>
				<button onClick={() => this.setState(count + 1)}>
					Click me
				</button>
			</div>
		)
	}
}
