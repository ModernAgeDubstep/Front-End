import axios from 'axios';
import { data } from '../../Data/Data';

export const actionTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  FETCH_ERROR: 'FETCH_ERROR',
  GET_ALL_ARTISTS: 'GET_ALL_ARTISTS',
  SET_BIO_DATA: 'SET_BIO_DATA'
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

export const fetchArtistBioData = (dispatch, artistName, artistId) => {
  dispatch({ type: actionTypes.FETCH_START });
  axios
      .all([
        axios.get(`https://modernagedubstep.herokuapp.com/api/artists/${artistName}`),
        axios.get(`https://modernagedubstep.herokuapp.com/api/releases/${artistId}`),
      ])
      .then(
        axios.spread((artistData, releaseData) => {
          // This code block adds a photo to each index for the album release.
          // Will refactor once I know how to use photo bucket tech
          let releasesArray = [];
          let index = 0;
          releaseData.data.releases.forEach(release => {
            const newRelease = {
              ...release,
              release_photo: data.releasePhotos[index]
            }
            if(index < 2){
              index++
            } else {
              index = 0
            }
            releasesArray.push(newRelease);
          })
          dispatch({ type: actionTypes.SET_BIO_DATA, payload: [releasesArray, artistData.data.artistData[0]]})
        })
      )
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_ERROR, payload: err })
      });
      dispatch({ type: actionTypes.FETCH_END })
}

