import React, {Component} from 'react';
import MessageList from '../MessageList';
import ProfileBar from '../ProfileBar';
import InputText from '../InputText';
import uuid from 'uuid';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: Object.assign({}, this.props.user,{retweets:[]}, {favorites:[]}),
            openText: false,
            messages : [
                {
                    id: uuid.v4(),
                    text : "Mensaje del tweet",
                    picture : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
                    displayName : "Jorge Diaz",
                    userName : "JorgeDiaz",
                    date : Date.now()-180000,
                    retweets: 0,
                    favorites: 0
                },
                {
                    id: uuid.v4(),
                    text : "Este es un nuevo mensaje",
                    picture : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
                    displayName : "Jorge Diaz",
                    userName : "JorgeDiaz",
                    date : Date.now()-1800000,
                    retweets: 0,
                    favorites: 0
                }
            ]
        }

        this.handleSendText = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpentText = this.handleOpentText.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleSendText(event){
        event.preventDefault();
        let newMessage = {
            id: uuid.v4(),
            userName: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value,
            picture: this.props.user.photoURL
        }

        this.setState({
            messages: this.state.messages.concat(newMessage),
            openText: false
        })
    }

    handleCloseText(event){
        event.preventDefault();
        this.setState({openText: false})
    }

    handleOpentText(event){
        event.preventDefault();
        this.setState({openText: true})
    }

    handleRetweet(msgId){
        let alreadyRetweeted = this.state.user.retweets.filter(rt => rt===msgId);
        if(alreadyRetweeted.length === 0){
            let messages = this.state.messages.map( msg =>{
                if(msg.id === msgId){
                    msg.retweets++;
                }
                return msg;
            })

            let user = Object.assign({}, this.state.user) 

            this.setState({
                messages,
                user
            })
        }
    }

    handleFavorite(msgId){
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav===msgId);
        if(alreadyFavorited.length === 0){
            let messages = this.state.messages.map( msg =>{
                if(msg.id === msgId){
                    msg.favorites++;
                }
                return msg;
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId);

            this.setState({
                messages,
                user
            })
        }
    }

    renderOpenText(){
        if(this.state.openText){
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            ) 
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
                <MessageList 
                    messages={this.state.messages} 
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                />
            </div>
        )
    }
}
export default Main;