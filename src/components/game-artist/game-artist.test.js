import React from 'react';
import renderer from 'react-test-renderer';

import GameArtist from './game-artist';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: `path.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `path.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `path.jpg`,
        artist: `Jim Beam`,
      },
    ],
  },
};

describe(`Test GameArtist`, () => {
  it(`GameArtist is rendered correctly`, () => {
    const {question} = mock;
    const tree = renderer.create(<GameArtist
      onAnswer={jest.fn()}
      question={question}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
