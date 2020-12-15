import React, { Component } from "react";
import Typography from "../../Components/Typography";
import Button from "../../Components/Button";
import api from "../../services/api";
import "./style.css";

export default class Main extends Component {
  state = {
    quotes: [],
    image: [],
  };

  componentDidMount() {
    this.loadSwift();
  }

  loadSwift = async () => {
    const responseQuote = await api.get("/");
    const responseImage = await api.get("/image");

    this.setState({
      quotes: responseQuote.data.quote,
      image: responseImage.data.url,
    });
  };

  render() {
    const { quotes, image } = this.state;
    return (
      <div className="taylor-data">
        <Typography variant="subheading" color="primary">
          {quotes}
        </Typography>
        <img src={image} alt="Taylor Swift"></img>
        <Button
          onClick={this.loadSwift}
          type="button"
          buttonStyle="btn--solid"
          buttonSize="btn--campaigns--lg"
        >
          give me another round
        </Button>
      </div>
    );
  }
}
