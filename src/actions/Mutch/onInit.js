import $ from 'jquery';
import { fromJS } from 'immutable';
//import { stringify } from 'qs';
//import Axios from 'axios';

import { onMutchReset } from './mutchAction';
import { onGenreInit } from '../Genre';
import {
  onSpinnerMutchHide,
  onSpinnerMutchShow,
} from '../spinnerAction';
import { scriptPath } from '../../models/path';

const onMutchInit = excel => (
  (dispatch) => {
    /*
    const fakeData = fromJS([
      {
        name: '中文流行',
        length: 102,
      }, {
        name: '電子音樂',
        length: 102,
      }, {
        name: '西洋流行',
        length: 102,
      }, {
        name: '嘻哈音樂',
        length: 98,
      }, {
        name: '日韓音樂',
        length: 179,
      },
    ]);
    dispatch(onGenreInit(fakeData));
    */

    function ajaxSuc(res) {
      const { data } = res;

      if (data) dispatch(onGenreInit(fromJS(data)));
      else alert('Got no data.');

      dispatch(onSpinnerMutchHide());
    }

    function ajaxErr(err) {
      console.error(err);
      alert('Can\'t get datas from Google Spread Sheet. Please check the excel ID or click the \'auth\' button to get access then try again.');
      dispatch(onSpinnerMutchHide());
    }

    dispatch(onMutchReset());
    dispatch(onSpinnerMutchShow());
    $.ajax({
      crossDomain: true,
      url: scriptPath,
      method: 'GET',
      data: {
        excel,
        action: 'getInitData',
        callback: 'mutchInit',
      },
      dataType: 'jsonp',
      success: ajaxSuc,
      error: ajaxErr,
    });

  /*
    const params = stringify({
      excel,
      action: 'getInitData',
      callback: 'mutchInit',
    });

    const option = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '<origin> | *',
      },
      withCredentials: true,
      credentials: 'same-origin',
    };

    return Axios(url, option)
      .then((res) => {
        console.log(res);

        let result = true;
        if (res.error) result = false;
        else {
          dispatch(
            onGenreInit(fromJS(res.data)),
          );
        }

        return result;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  */
  }
);

export default onMutchInit;
