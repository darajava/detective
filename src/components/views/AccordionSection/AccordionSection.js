import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class AccordionSection extends Component {

    constructor(props) {
      super();

      this.state = {
        answerOpen: typeof props.open === 'undefined' ? false : props.open,
        hash: 'hash' + Math.floor(Math.random() * 10000),
      };

      this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
      if (!this.state.answerOpen) {
        setTimeout(() => {
          document.getElementById(this.state.hash).scrollIntoView({
            behaviour: "smooth",
          });
        }, 10);
      }

      this.setState({answerOpen: !this.state.answerOpen});
    }

    render() {
      let story = this.props.story;
      let noTitle = this.props.noTitle;

      let open = this.state.answerOpen;

      return (
        <div>
          {!noTitle && <p onClick={this.toggleAnswer} klass='title'>
            <div klass='chevron'>
              <Glyphicon glyph={"chevron-" + (open ? "up" : "down")} />
            </div>
            {this.props.title}
          </p>}
          {open && <p id={this.state.hash} klass='text fadeIn'>{this.props.text}</p>}
        </div>
      );
    }
        
}

export default AccordionSection;
 