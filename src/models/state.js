import Immutable from 'immutable';

export const dataState = Immutable.fromJS({
  amount: 10,
  excel: '',
  genres: [],
  score: {
    correct: 0,
    wrong: 0,
  },
  pickedGenre: '',
  gaming: false,
  questions: [
    /*
    *  {
    *    title: [],
    *    artist: [],
    *    alias: [],
    *    url: {
    *      spotify: '',
    *      youtube: '',
    *    },
    *  }
    */
  ],
});

export const uiState = Immutable.fromJS({
  popup: {
    show: false,
    question: -1,
  },
});
