import React,{Component} from 'react';

class InputContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      text:this.props.text
    }

  }

  handleInput(text){
    this.setState({text:text});
    this.props.onInputChange(text);
  }

  render(){
    return(
      <div>
        <label>Input</label>
        <textarea onChange={evt=> this.handleInput(evt.target.value) } className="input-container" rows="20" value={this.props.text}>
        </textarea>
      </div>
    )
  }
}


export default InputContainer;
