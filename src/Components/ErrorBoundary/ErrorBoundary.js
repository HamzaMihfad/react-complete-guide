import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({ hasError: true, errorMessage: error });
	}

	render() {
		return (
			this.state.hasError ?
				<div style={{ color: 'red', alignItems: 'center', justifyContent: 'center' }}>
					<h2>Something went wrong !!</h2>
				</div> : this.props.children
		);
	}
}

export default ErrorBoundary;