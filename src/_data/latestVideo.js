const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  try {
    // https://benborgers.com/posts/google-sheets-json
    let video = await Cache(
      'https://opensheet.elk.sh/1pIqvTFaP49jiBod_B-ijXBXs7tpSjhbtAubnXpnTiMk/1',
      {
        duration: '1d', // 1 day
        type: 'json', // also supports "text" or "buffer"
      }
    );
    return video;
  } catch (e) {
    return [];
    console.log('Failed getting google sheet video info, returning 0');
  }
};
