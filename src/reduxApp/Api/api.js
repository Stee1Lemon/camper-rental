import axios from 'axios';

axios.defaults.baseURL = 'https://6623ab1b3e17a3ac846fd09b.mockapi.io/api/';

export const getCampervan = async ({ page }) => {
  const { data } = await axios.get('campervan', {
    params: { page: page, limit: 4 },
  });
  return data;
};
