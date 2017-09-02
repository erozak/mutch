import 'whatwg-fetch';

import { fromJS } from 'immutable';
// import { stringify } from 'qs';

import { onGenreInit } from '../genreAction';

const onMutchInit = excel => (
  (dispatch) => {
  /*
    const params = stringify({
      excel,
      action: 'getInitData',
      callback: 'mutchInit',
    });

    const url = `https://script.google.com/macros/s/AKfycbx6qsnSpw7ETpOGCgBtZEPkjJm52n1t3jFAucVY8PLT3byl_-2y/exec?${params}`;
    const header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain',
    });
    */
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

  /*
    fetch(req)
      .then(res => res.json())
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
