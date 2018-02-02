import React, {Component} from 'react';
import 'normalize-css';
import styles from './app.css';

import Header from "../Header"
import Main from "../Main"
class App extends Component{
    constructor(){
        super();
        this.state = {
            user:{
                photoURL : 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png',
                email: 'jorgeldra@gmail.com',
                onOpenText: false,
                displayName:'Jorge Diaz'
            }
        }
    }
    render(){
        return(
            <div>
                <Header />
                <Main 
                    user={this.state.user} 
                />
            </div>
        )
    }
}

export default App;