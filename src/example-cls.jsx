import React, { PureComponent } from 'react';
import { addFakeListener, removeFakeListenr, randomString } from './fake-listener';
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
		document.title = `You clicked ${this.state.count} times`;
		removeFakeListenr(prevState.id);
		addFakeListener(this.state.id, this.props.onEffectTest);
  }

	componentWillUnmount() {
		removeFakeListenr(this.state.id);
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
