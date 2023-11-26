import { LATEST_POSTS, POSTS } from "./getPostsData"
import { getPostsData } from "./getPostsData";

export async function getTopicsData() {
  const data = await getPostsData(POSTS)
  const postsKeys = data['latest_posts'];
  const acc = []
  
  const filteredTopics = postsKeys.filter(post => {
    if(!acc.includes(post['topic_id'])){
      acc.push(post['topic_id'])
      return post;
    }
  }).map(post => {
    return {id: post['topic_id'], name: post['topic_title']}
  })
  
  
  return filteredTopics
}




/*


const POSTS = 'posts'
const LATEST_POSTS= 'latest'
const apiKey = 'a8465481d606ca1e409f834695cd5bc7c4b72b9c53486c2461864b797f7b55bf';
const apiUsername = 'apdev';

async function getPostsData(section) {
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

async function getTopicsData() {
  const data = await getPostsData(LATEST_POSTS)
  //const postsKeys = data['latest_posts'];
  const acc = []
  
  const filteredTopics = postsKeys.filter(post => {
    if(!acc.includes(post['topic_id'])){
      acc.push(post['topic_id'])
      return post;
    }
  }).map(post => {
    return {id: post['topic_id'], name: post['topic_title']}
  })
  
  return(data)
  //return filteredTopics
}

const notWorking = 'Nelson Laugh'
export { getTopicsData, notWorking};


*/ 