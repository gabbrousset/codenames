import React, { Component } from "react";
import uuid from "uuid";

export default class DisplayChat extends Component {
	formatMessage = (message) => {
		return (
			<div className={"messageText " + message.color} key={uuid.v4()}>
				{message.name}: {message.message}
			</div>
		);
	}
	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}
	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	render(){
		let messages = [];
		this.props.messages.map((message)=> {
			messages.push(this.formatMessage(message))
		})
		return(
			<div className="chatWindow">
				{messages}
				<div style={{ float:"left", clear: "both" }}
					ref={(el) => { this.messagesEnd = el; }}>
				</div>
			</div>
		);
	};
}