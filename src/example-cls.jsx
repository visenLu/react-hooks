import React, { PureComponent } from 'react';
import { addFakeListener, removeFakeListener, randomString } from './fake-listener';
export default class ExampleCls extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
			id: randomString(),
		}
	}

	componentDidMount() {
		document.title = `You clicked ${this.state.count} times`;
		addFakeListener(this.state.id, this.props.onEffectTest);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count)
			document.title = `You clicked ${this.state.count} times`;

		if (prevState.id !== this.state.id) {
			removeFakeListener(prevState.id);
			addFakeListener(this.state.id, this.props.onEffectTest);
		}
  }

	componentWillUnmount() {
		removeFakeListener(this.state.id);
	}

	render() {
		const { count, id } = this.state;
		return (
			<div>
				<p>You clicked {count} times</p>
				<button onClick={() => this.setState({ count: count + 1, id: randomString() })}>
					{id} Click me
				</button>
			</div>
		)
	}
}
