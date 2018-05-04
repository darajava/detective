import React, { Component } from 'react';
import Story from '../../views/Story/Story';

class PlayStory extends Component {

    constructor() {
      super();

      this.stories = [
        {
          title: 'Some quiet drinks',
          story: 'Harry goes to the bar and runs into Pierre. They speak quietly for a few hours and Harry leaves. Later that evening, Pierre is arrested.',
          answer: `They are in a speakeasy bar during prohibition. That's why they have to speak quietly. Pierre becomes very drunk because he has been drinking for so long.

On his way home he is loud and obnoxious. A police man spots him and can easily tell that he has been drinking so he arrests Pierre.`,
          hints: [
            'They were in America',
            'Pierre continued to drink after Harry left',
            'Pierre was arrested in 1928',
            'Alcohol was banned in America during this era',
            'You are retarded if you didn\'t get it by now',
          ],
        },
      ];
    }

    componentDidMount() {
    }

    render() {
      let index = parseInt(this.props.match.params.story) - 1;

      let story = this.stories[0];


      return (
        <div>
          <Story story={story} />
        </div>
      );
    }

}

export default PlayStory;
