import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render(){
    if(!this.props.user){
      return <h3>Please select a user from above!</h3>
    }

    return(
      <div>
        <h2>{this.props.user.first}{this.props.user.last}</h2>
        <h3>{this.props.user.age}</h3>
        <h3>{this.props.user.description}</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.ActiveUser
  }
}
 export default connect(mapStateToProps)(UserDetails);
