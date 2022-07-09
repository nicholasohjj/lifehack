import axios from 'axios'
var FormData = require('form-data');
var data = new FormData();
data.append('image', 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

var config = {
  method: 'post',
  url: 'https://api.imgur.com/3/image',
  headers: { 
    'Authorization': 'Client-ID {{clientId}}', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});