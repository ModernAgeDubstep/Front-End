import axios from 'axios';
import { data } from '../../Data/Data';

export const actionTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  FETCH_ERROR: 'FETCH_ERROR',
  GET_ALL_ARTISTS: 'GET_ALL_ARTISTS'
}

export const fetchArtists = (dispatch) => {
  dispatch({ type: actionTypes.FETCH_START })
    axios
      .get("https://modernagedubstep.herokuapp.com/api/artists/")
      .then((res) => {
        let artists = [];
        let index = 0;

        res.data.artists.forEach((artist) => {
          const newData = {
            ...artist,
            artist_photo: data.artists[index].artist_photo,
          };
          index++;
          artists.push(newData);
        });
        dispatch({ type: actionTypes.GET_ALL_ARTISTS, payload: artists })
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_ERROR, payload: err })
      });
      dispatch({ type: actionTypes.FETCH_END })
}

