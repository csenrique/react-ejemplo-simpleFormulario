import React, {Component} from 'react';

export default class UserForm extends Component {

    render() {
        return(          
            <form onSubmit={this.props.onAddUser} className="form-group">
                <div class="form-group">
                 <input type="text" name="name" placeholder="Nombre" className="form-group"/> 
                </div>
                <div class="form-group">
                   <input type="email" name="email" placeholder="Email" className="form-group"/>
                </div>
                <div class="form-group">
                   <input type="submit" value="Guardar" className="form-group"/>
                </div>
            </form>           
        );
    }

}