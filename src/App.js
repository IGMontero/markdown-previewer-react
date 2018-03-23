import React, { Component } from 'react';
import './App.css';
import InputContainer from './components/input-container';
import OutputContainer from './components/output-container';

const startingText = 'An h1 header\n============\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nUse 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it\'s all\nin chapters 12--14\"). Three dots ... will be converted to an ellipsis.\nUnicode is supported. ☺\n\n***\n\nMarkdown example text extracted from [here](http:\/\/www.unexpected-vortices.com\/sw\/rippledoc\/quick-markdown-example.html).\n';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      text:startingText
    }
  }

  inputChange(text){
    this.setState({text:text});
  }

  render() {
    return (
      <div id="main-container" className="container">
      <div className="row">
        <div className = "col-6">
          <InputContainer text={this.state.text} onInputChange={text => this.inputChange(text)} />
        </div>
        <div className = "col-6">
          <OutputContainer text={(this.state.text)} />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
