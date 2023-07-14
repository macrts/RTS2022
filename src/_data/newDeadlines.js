const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  try {
    // https://benborgers.com/posts/google-sheets-json
    let contact = await Cache(
      'https://opensheet.elk.sh/1S6mTmobhT4FzGV5HmzDhhzZr2UcopE7B3IF_JtShjvI/1',
      {
        duration: '1d', // 1 day
        type: 'json', // also supports "text" or "buffer"
      }
    );
    return contact;
  } catch (e) {
    return [];
    console.log('Failed getting google sheet contact info, returning 0');
  }
};
