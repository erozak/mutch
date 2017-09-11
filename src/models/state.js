import Immutable from 'immutable';

export const dataState = Immutable.fromJS({
  amount: 10,
  excel: '1Izf1MmDHMLcULwUztQ8EuTTOTvTgl3Y1LcamjRh7mLY',
  genres: [],
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
  spinner: {
    mutch: false,
    genre: false,
  },
  nav: false,
});
