import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BigButton from '../../views/BigButton/BigButton';

class SelectStory extends Component {

    constructor() {
      super();

      this.stories = [
        {
          link: '1',
          title: 'Some quiet drinks',
          difficulty: 'Difficulty: 5/5',
        },
        {
          link: '2',
          title: 'A noisy neighbour',
          difficulty: 'Difficulty: 4/5',
        },
        {
          link: '3',
          title: 'Community values',
          difficulty: 'Difficulty: 2/5',
        },
        {
          link: '4',
          title: 'A tall block of flats',
          difficulty: 'Difficulty: 4/5',
        },
      ]

    }

    render() {

      let components = [];

      for (let i = 0; i < this.stories.length; i++) {
        let story = this.stories[i];
        components.push(<BigButton text={story.title} locked={parseInt(story.link) > 2} soustitle={story.difficulty} link={story.link} />);
      }

      return (
        <div>
          {components}
        </div>
      );
    }
}

export default SelectStory;