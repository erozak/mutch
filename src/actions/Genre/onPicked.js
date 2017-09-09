import 'whatwg-fetch';

import { fromJS } from 'immutable';
// import { stringify } from 'qs';

import { onGenreChange } from './genreAction';

const onGenrePicked = genre => (
  (dispatch) => {
    const fakeData = fromJS([
      {
        title: 'Here It Comes',
        artists: ['Pegboard Nerds'],
        link: {
          spotify: '3pR8LVnJrvXwxs2rmMbwks',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'Barbie Girl',
        artists: ['Aqua'],
        link: {
          spotify: '7atIHMnLUJ5ikdnosz1GwU',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'Tremor',
        artists: [
          'Dimitri Vegas',
          'Like Mike x Martin Garrix',
        ],
        link: {
          spotify: '57xsmqTA1KtiVGmFLbmbin',
          youtube: '',
        },
        alias: [],
      }, {
        title: '100s',
        artists: ['Borgore'],
        link: {
          spotify: '39pC3mxCuMaQhKEQ9wodpi',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'Beneath With Me',
        artists: ['Kaskade'],
        link: {
          spotify: '1lsGvEI6CpsS8upSZSKEZX',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'I Can\'t Stop',
        artists: ['Flux Pavilion'],
        link: {
          spotify: '03EuhmMsEHVFI9ytainStU',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'Welcome to the next level',
        artists: ['Starr Chen'],
        link: {
          spotify: '2nrj7fnVLQkhULzNbfad4D',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'The Ocean',
        artists: ['Mike Perry'],
        link: {
          spotify: '2CPqh63wRVscbceKcPxwvv',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'U Can\'t Touch This',
        artists: ['MC Hammer'],
        link: {
          spotify: '1B75hgRqe7A4fwee3g3Wmu',
          youtube: '',
        },
        alias: [],
      }, {
        title: 'Axel F',
        artists: ['Crazy Frog'],
        link: {
          spotify: '5i4WslrU93vPhBXm6tS3gA',
          youtube: '',
        },
        alias: [],
      },
    ]);

    dispatch(onGenreChange(genre, fakeData));
  }
);

export default onGenrePicked;
