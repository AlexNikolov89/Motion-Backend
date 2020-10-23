import baseUrl from '../../helpers/url'
import {NEW_POST} from '../actions/actionTypes'


export const setPostData = (data) => {
  return {
    type: 'NEW_POST',
    payload: data,
  }
}

export const newPostAction = (content) => async (dispatch, getState) => {   
  const { token } = getState();    
  const url = `${baseUrl}/backend/api/social/posts/`;
  const config = {
      method: 'POST',
      headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ text_content:content }),
  };

  const response = await fetch(url, config).catch((error) => console.log('in post fetch:', error))
  const data = await response.json();
  
  dispatch(setPostData(data));
};


// export const newPostAction = (content) => async (dispatch, getState) => {
//   const { token } = getState();

//   const url = `${baseUrl}/backend/api/social/posts/`;
//   const config = {
//     method: "POST",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     }),
//     body: JSON.stringify({ text_content:content }),
//   };
//   const response = await fetch(url, config);
//   const data = await response.json();
//   //return data;

//   dispatch(setPostData(data));
// };

