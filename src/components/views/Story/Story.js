import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import AccordionSection from '../AccordionSection/AccordionSection';

const Story = (props) => {
  let story = props.story;
  
  return (
    <div klass="wrapper">
      <h1 klass='title'>{story.title}</h1>
      <AccordionSection title={'Story'} text={story.story} open={true} noTitle={true}/>
      <AccordionSection title={'Hints'} text={story.hints.map((e) => <li>{e}</li>)} />
      <AccordionSection title={'Explanation'} text={story.answer} />
    </div>
  );
}
        

export default Story;
 