import axios from 'axios';
import { SingleProductType } from '../types';

const fetchImages = async () => {
  try {
    const response = await axios.get<SingleProductType>(
      'https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=300'
    );
    return response.data.photos;
  } catch (err) {
    return err;
  }
};

export { fetchImages };
