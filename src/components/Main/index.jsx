import React, {Component} from 'react';
import MessageList from '../MessageList';
import ProfileBar from '../ProfileBar';
import InputText from '../InputText';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            openText: false,
            messages : [
                {
                    text : "Mensaje del tweet",
                    picture : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
                    displayName : "Jorge Diaz",
                    userName : "JorgeDiaz",
                    date : Date.now()-180000
                },
                {
                    text : "Este es un nuevo mensaje",
                    picture : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
                    displayName : "Jorge Diaz",
                    userName : "JorgeDiaz",
                    date : Date.now()-1800000
                }
            ]
        }
    }

    handleOpentText(event){
        event.preventDefault();
        this.setState({openText: true})
    }

    renderOpenText(){
        if(this.state.openText){
            return <InputText />;
        }
    }
    render(){
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpentText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}
export default Main;