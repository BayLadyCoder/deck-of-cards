import React, { Component } from "react";
import "./DeckOfCards.css";
import axios from "axios";
import Card from "./Card";

export class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: "",
      showed_cards: [],
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
    // console.log(data);
    const value = data.cards[0].value;
    const suit = data.cards[0].suit;
    const card_name = `${value} ${suit}`;
    const card_img = data.cards[0].image;
    const remaining = data.remaining;
    let cards = [];
    cards.push({
      card_name: card_name,
      card_img: card_img
    });

    this.setState({
      showed_cards: [...this.state.showed_cards, ...cards],
      remaining: remaining
    });
  }

  render() {
    const cards = this.state.showed_cards.map(c => (
      <Card img={c.card_img} name={c.card_name} />
    ));
    // console.log("State", this.state);
    return (
      <div className="DeckOfCards">
        <h1>Deck Of Cards</h1>
        <button onClick={this.getRandomCard}>Click Me</button>
        <div className="cards">{cards}</div>
      </div>
    );
  }
}

export default DeckOfCards;
