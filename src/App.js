import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Chars/CharComponent';

class App extends Component {
  state = {
    text: "",
    length: 0,
    textChars: []
  }

  updateTextHandler = (event) => {
    const text = event.target.value;
    const textChars = [...text.split('')]

    this.setState({
      text: text,
      length: text.length,
      textChars: textChars
    });
  }

  deleteCharHandler = (charIndex) => {
    const text = this.state.text;
    const textChars = [...text.split('')];
    textChars.splice(charIndex, 1);

    const newText = textChars.join('');

    this.setState({
      text: newText,
      length: newText.length,
      textChars: textChars
    });
  }

  render() {
    let textChars = (
      <div>
        {this.state.textChars.map((character, index) => {
          return <CharComponent 
            click={() => this.deleteCharHandler(index)}
            letter={character}
            key={index}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>List Conditionals Assignment</h1>
        <input type="text" onChange={(event) => this.updateTextHandler(event)} value={this.state.text} />
        <p>The length of the text is: {this.state.length} </p>
        <ValidationComponent 
          textLenght={this.state.length}
        />
        {textChars}
      </div>
    );
  }
}

export default App;
