const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.getCurrentlyPlaying = functions.pubsub
  .schedule('every 1 minutes')
  .onRun(async () => {
    const response = await fetch(
      'https://spotify-to-twitter.vercel.app/api/cron/',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_TO_TWITTER_API_KEY}`,
        },
      }
    );
    console.log(await response.json());
  });
