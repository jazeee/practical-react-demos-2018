import React, { Component } from 'react';

export class Quotes extends Component {
  state = {
    quotes: [],
    error: "",
  };
  componentDidMount = async() => {
    try {
      const response = await fetch("https://quotes.rest/qod");
      console.log(response);
      if (!response.ok){
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
      }
      const quoteObject = await response.json();
      console.log(quoteObject);
      this.setState({quotes: quoteObject.contents.quotes});
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  render = () => {
    const { quotes, error } = this.state;
    console.log(quotes);
    if (error){
      return error;
    }
    return (
      <div>
        {quotes.map((quote, index) => {
          return (
            <div key={index}>
              {`${quote.quote} by ${quote.author}`}
            </div>
          );
        })}
      </div>
    );
  }
}
