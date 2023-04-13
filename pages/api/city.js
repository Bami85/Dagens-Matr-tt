import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
  params: {query: 'new york', locale: 'en_US', currency: 'USD'},
  headers: {
    'X-RapidAPI-Key': '36782acf59msh891212e1db79aa6p1b632fjsnb3e09490f54e',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});