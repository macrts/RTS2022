const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  try {
    // https://benborgers.com/posts/google-sheets-json
    let position = await Cache(
      'https://opensheet.elk.sh/15GZq1zj280sDx5yRu5pOik-cToG52KjLD55qUGy9YpE/1',
      {
        duration: '1d', // 1 day
        type: 'json', // also supports "text" or "buffer"
      }
    );
    return position;
  } catch (e) {
    console.log('Failed getting google sheet contact info, returning 0');
    return [];
  }
};
