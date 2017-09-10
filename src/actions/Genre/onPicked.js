import $ from 'jquery';
import { fromJS } from 'immutable';
// import { stringify } from 'qs';

import {
  onGenreChange,
  onGenreReset,
} from './genreAction';
import {
  onSpinnerGenreHide,
  onSpinnerGenreShow,
} from '../spinnerAction';
import { scriptPath } from '../../models/path';

const onGenrePicked = (excel, genre) => (
  (dispatch) => {
    /*
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
    */

    function ajaxSuc(res) {
      const { data } = res;
      if (data) dispatch(onGenreChange(genre, fromJS(data)));
      else alert('Ajax got nothing.');
      dispatch(onSpinnerGenreHide());
    }

    function ajaxErr(err) {
      console.error(err);
      alert('Can\'t get datas from Google Spread Sheet. Please check the excel ID or click the \'auth\' button to get access then try again.');
    }

    dispatch(onSpinnerGenreShow());
    dispatch(onGenreReset());
    $.ajax({
      crossDomain: true,
      url: scriptPath,
      method: 'GET',
      data: {
        excel,
        action: 'getGenreSongs',
        name: genre,
        quantity: 10,
        callback: 'genreInit',
      },
      dataType: 'jsonp',
      success: ajaxSuc,
      error: ajaxErr,
    });
  }
);

export default onGenrePicked;
