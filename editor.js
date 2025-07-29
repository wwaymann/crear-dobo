require('dotenv').config();
const axios = require('axios');

const WIX_API_KEY = process.env.WIX_API_KEY;
const WIX_API_URL = 'https://www.wix.com/_api/wix-sm/v1/products';

axios.get(WIX_API_URL, {
  headers: {
    Authorization: WIX_API_KEY
  }
})
.then((response => {
  console.log('Productos:', response.data);
})
.catch(error => {
  console.error('Error obteniendo los productos:', error);
});
