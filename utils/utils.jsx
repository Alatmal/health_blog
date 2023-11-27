export const parseImageURL = (urlImage) => {
    const sizeRgx = /{size}/gi
    let urlLinkImage = ''
    if(sizeRgx.test(urlImage)){
      urlLinkImage = `https://discourse-dev.ally.day${urlImage.replace(sizeRgx,'small')}`
    } else {
      urlLinkImage = `https://discourse-dev.ally.day${urlImage}`
    }
    return urlLinkImage
}

export const getTopicsData = (obj) => {
    const posts = obj['latest_posts'];
    const acc = []

    const filteredTopics = posts.filter(post => {
        if(!acc.includes(post['topic_id'])){
        acc.push(post['topic_id'])
        return post;
        }
    }).map(post => {
        return {id: post['topic_id'], name: post['topic_title'], slug: post["topic_slug"]}
    })


    return filteredTopics
}

export const getBlogsbyTopics = (ids, obj) => {
    const posts = obj['latest_posts'];
    const topicsId = ids.map(items=>items.id);
    const blogsByTopicId = {}

    topicsId.forEach((id) => {
        blogsByTopicId[id] = posts.filter(item => item['topic_id'] == id)
    })

    return blogsByTopicId;
}
  