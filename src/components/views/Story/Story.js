import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import AccordionSection from '../AccordionSection/AccordionSection';

class Story extends Component {

    constructor() {
      super();

      this.state = {
        answerOpen: true,
      };

      this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
      this.setState({answerOpen: !this.state.answerOpen});
    }

    render() {
      let story = this.props.story;


      return (
        <div klass="wrapper">
          <h1 klass='title'>{story.title}</h1>
          <AccordionSection title={'Story'} text={story.story} open={true}/>
          <AccordionSection title={'Answer'} text={story.answer} />
          <AccordionSection title={'Hints'} text={story.hints.map((e) => <li>{e}</li>)} />

        </div>
      );
    }
        
}

export default Story;
 