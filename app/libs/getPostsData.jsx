
const apiKey = 'a8465481d606ca1e409f834695cd5bc7c4b72b9c53486c2461864b797f7b55bf';
const apiUsername = 'apdev';

export async function getPostsData(section) {
    const apiUrl = `https://discourse-dev.ally.day/${section}.json`;
    const data = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Api-Key': apiKey,
        'Api-Username': apiUsername,
        'Content-Type': 'application/json'
      },
    });
    try { 
      console.log('data fetched')
      const posts = await data.json();
      return posts;
      
    } catch (error) {
      console.error('Error in getPostsData:', error.message);
      throw new Error('Failed to get posts data');
    }
}

export const POSTS = 'posts'
export const LATEST_POSTS= 'latest'


/*
export async function getPostsData(section) {
  const apiUrl = `https://discourse-dev.ally.day/${section}.json`;
  const data = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Api-Key': apiKey,
      'Api-Username': apiUsername,
      'Content-Type': 'application/json'
    },
  });
  try { 
    console.log('data fetched')
    const posts = await data.json();
    return posts;
    
  } catch (error) {
    console.error('Error in getPostsData:', error.message);
    throw new Error('Failed to get posts data');
  }
}

*/