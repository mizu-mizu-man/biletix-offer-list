import axios from 'axios';

const URL_TO_JSON = 'http://biletix.ru/affiliate/api/test_json.php';
// const URL_TO_JSON = '../../local_store/test_json.php';

export const fetchOffers = () => {
  // // Fetching via fetch()
  // const request = fetch(URL_TO_JSON)
  //   .then((response) => response.json())
  //   .then((offers) => {
  //     console.log(offers);
  //     return offers;
  //   })
  //   .catch(() => {
  //     console.log('Error fetching JSON data:(');
  //     return [];
  //   });

  // Fetching via axios
  const request = axios.get(URL_TO_JSON)
    .then((offers) => {
      console.log(offers.data);
      return offers.data;
    })
    .catch(() => {
      console.log('Error fetching JSON data:(');
      return [];
    });

  return {
    type: 'FETCH_OFFERS',
    payload: request
  };
};
