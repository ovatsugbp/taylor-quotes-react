import React, { Component } from 'react';
import api from "../../services/api";
import './style.css';

export default class Main extends Component {
    state = {
        quotes: [],
        image: []
    }

    componentDidMount(){
        this.loadSwift();
    }

    loadSwift = async () => {
        const responseQuote = await api.get("/");
        const responseImage = await api.get("/image");
        
        this.setState(
            {
                quotes: responseQuote.data.quote,
                image: responseImage.data.url
        });
        
    };

    render() {
        const {quotes, image} = this.state;
        return (
            <div className="taylor-data">                
            <h1>{quotes}</h1>
            <img src={image} alt="Taylor Swift"></img>
            <button onClick={this.loadSwift}>Give me another one!</button>
            </div>
        )
    }
}
