import React, { Component } from "react";
import axios from "axios";

export class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: "",
      current_card: "",
      remaining: 52
    };
  }

  async componentDidMount() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const res = await axios.get(url);
    console.log(res.data);
    const id = res.data.deck_id;
    this.setState({ deck_id: id });
  }

  async getRandomCard() {
    const url = "";
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Deck Of Cards</h1>
        <h2>{this.state.deck_id}</h2>
      </div>
    );
  }
}

export default DeckOfCards;
