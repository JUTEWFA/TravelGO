/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': '468908dca4mshfba9f252d0e7f69p15817cjsn4d0c571e7288',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });


  
    return data;
  } catch (error) {
    console.log(error);
  }
};
