import React, {Component} from 'react';
import {Route} from 'react-dom';
import UserForm from './UserForm';
import UserList from './UserList'

import {searchUsers} from './Data';
class Users extends React.Component {
    constructor (){
        super();
        this.state = {
            users: []
        };

    };
        render () {
            return(

                <div className='Users'>
                    <h1>Github User Info</h1>
                    <div className='wrapper'>
                        <UserForm onFilter={this.onFilter} />
                        <Route
                        path='/'
                        render={props =>(
                            <UserList
                            users={this.state.users}
                            {...props} 
                            />
                        )}
                        />
                          </div>
              <br/>
                </div>

               
                      )};
            
                };
                
export default Users