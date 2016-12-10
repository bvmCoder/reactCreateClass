"use strict";

var React = require('react');

var Home = React.createClass({
	render: function render() {
		return (
			<div className="jumbotron">
				<h1>Reacting App Made By React Developer</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
			</div>
		);
	}
});

module.exports = Home;
