/* eslint-disable */

import React from 'react';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app';
import {snapshotURL} from '../audio-component/audio-component';

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: snapshotURL,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: snapshotURL,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

describe(`e2e test App`, () => {
  it(`Question answer switches to another question`, () => {
    // const {questions} = mock;
    // const app = mount(<App
    //   errorCount={0}
    //   gameTime={0}
    //   questions={questions}
    // />);

    // app.setState({
    //   question: 0,
    // });
    // app.update();

    // const form = app.find(`form`);
    // form.simulate(`submit`, {
    //   preventDefault() { },
    // });

    // expect(app.state(`question`)).toEqual(1);
  });

  it(`Last question answer leads to the first screen`, () => {
    // const {questions} = mock;
    // const app = mount(<App
    //   errorCount={0}
    //   gameTime={0}
    //   questions={questions}
    // />);

    // app.setState({
    //   question: questions.length - 1,
    // });
    // app.update();

    // const form = app.find(`form`);
    // form.simulate(`change`, {
    //   preventDefault() { }
    // });

    // expect(app.state(`question`)).toEqual(-1);
  });
});
