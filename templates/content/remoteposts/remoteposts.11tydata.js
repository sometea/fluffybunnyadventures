const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function() {
  const posts = await EleventyFetch('http://localhost:5001/fluffycms-d52d4/europe-west3/api', {
    duration: '5m',
    type: 'json',
  });
  return {
    documents: await Promise.all(posts.documents.map(async document => ({
      ...document,
      // body: 'testBody',
      body: (await EleventyFetch(`http://localhost:5001/fluffycms-d52d4/europe-west3/api/${document.id}`, {
        duration: '5m',
        type: 'json',
      })).body,
    }))),
  };
} 