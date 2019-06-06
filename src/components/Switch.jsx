import React, { Component } from 'react'
import './Switch.css';

export default class ComponentWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOn: false};
	}
	
	handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
	}
	
	render() {
		let classNames = ["component-wrapper", (this.state.isOn) ? "component-wrapper_is-light" : "component-wrapper_is-dark"].join(" ");
		return (
			<div className={classNames}>
				<Header 
					isOn={this.state.isOn}	
				/>
				<Switch 
					isOn={this.state.isOn}	
					handleToggle={this.handleToggle.bind(this)}
				/>
			</div>		
		);
	}
}

const Header = function(props) {
	let classNames = ["header", (props.isOn) ? "header_is-lit" : "header_is-dark"].join(" ");
	return (
		<h1 className={classNames}>React</h1>
	);
}

const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}	
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

