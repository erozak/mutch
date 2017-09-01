import Immutable from 'immutable';

export const dataState = Immutable.fromJS({
  score: {
    correct: 0,
    wrong: 0,
  },
  pickedGenre: '',
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
  amount: 10,
  excel: '',
  genres: [],
  pickedExcel: '',
  pickedQuestion: 0,
  popupShow: false,
});
