import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import TeamComponent from "./TeamComponent"

export default class TeamToggleComponent extends Component {
	state={
		isHovering: false,
	};
	handleMouseHover = () => {
		this.setState(this.toggleHoverState)
	};
	toggleHoverState = () => {
		return{
			isHovering: !this.state.isHovering,
		};
	};
	render(){
		if (this.state.isHovering && !this.props.gameActive && (this.props.user.team!==this.props.team)) {
			return(
				<div className="teamContent joinTeam"
					onMouseLeave={this.handleMouseHover}
				>
					<Button  type="submit" size="big" className="ui button" onClick={this.props.switchTeam}>Join Team</Button>
				</div>
			);
		} else {
			return(
				<div className="teamContent"
					onMouseEnter={this.handleMouseHover}
					onMouseLeave={this.handleMouseHover}
				>
					<TeamComponent
						user = {this.props.user}
						users = {this.props.users}
						teamWins={this.props.teamWins}
						teamUsers={this.props.teamUsers}
						gameActive={this.props.gameActive}
						changeNameInput ={this.props.changeNameInput}
					>
					</TeamComponent>
					<div className={"scoreboard " + this.props.team}>
						<span>{this.props.teamCount}</span>
					</div>
				</div>
			);
		}
	}
}