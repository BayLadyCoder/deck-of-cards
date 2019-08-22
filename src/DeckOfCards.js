import React, { Component } from "react";
import "./DeckOfCards.css";
import axios from "axios";

export class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: "",
      current_card: "",
      card_img: "",
      remaining: 52
    };
    this.getRandomCard = this.getRandomCard.bind(this);
  }

  async componentDidMount() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const res = await axios.get(url);
    console.log(res.data);
    const id = res.data.deck_id;
    this.setState({ deck_id: id });
  }

  async getRandomCard() {
    const deck_id = this.state.deck_id;
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    const value = data.cards[0].value;
    const suit = data.cards[0].suit;
    const current_card = `${value} ${suit}`;
    const card_img = data.cards[0].image;
    const remaining = data.remaining;
    this.setState({
      current_card: current_card,
      card_img: card_img,
      remaining: remaining
    });
  }

  render() {
    return (
      <div className="DeckOfCards">
        <h1>Deck Of Cards</h1>
        <button onClick={this.getRandomCard}>Click Me</button>
        <img src={this.state.card_img} alt={this.state.current_card} />
      </div>
    );
  }
}

export default DeckOfCards;
