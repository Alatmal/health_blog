const apiUrl = 'https://discourse-dev.ally.day/posts.json';
const apiKey = 'a8465481d606ca1e409f834695cd5bc7c4b72b9c53486c2461864b797f7b55bf';
const apiUsername = 'apdev';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Api-Key': apiKey,
    'Api-Username': apiUsername,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log(data['topic_list']['topics'][0]);
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
