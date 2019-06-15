import React, { Component } from 'react'

class Link extends Component {
  render() {
	  console.log(this.props.node);
    return(
		<div>
			<button>Trial</button>
			<div>
			{this.props.node.map(name=>{
				return <div>{name.node.name}</div>
			})}
			</div>
		</div>
	);
  }
}

export default Link