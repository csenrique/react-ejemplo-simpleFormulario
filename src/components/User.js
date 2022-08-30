import React, {Component} from 'react';

class User extends Component {
    render() {
        return(
                <li className="mx-auto">
                {this.props.name} - {this.props.email}
                </li>
        );
    }
}

export default User;