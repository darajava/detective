import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class AccordionSection extends Component {

    constructor(props) {
      super();

      this.state = {
        answerOpen: typeof props.open === 'undefined' ? false : props.open,
      };

      console.log(props)

      this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
      this.setState({answerOpen: !this.state.answerOpen});
    }

    render() {
      let story = this.props.story;

      let open = this.state.answerOpen;

      return (
        <div>
          <p onClick={this.toggleAnswer} klass='title'>
            <div klass='chevron'>
              <Glyphicon glyph={"chevron-" + (open ? "up" : "down")} />
            </div>
            {this.props.title}
          </p>
          {open && <p klass='text fadeIn'>{this.props.text}</p>}
        </div>
      );
    }
        
}

export default AccordionSection;
 