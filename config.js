const settings = {
 
  client: {
    presence: {
      activity: {
        name: 'WATCHING Waifu Center✰ | prefix m!',
        type: 'PLAYING'
      }
    },
    
    allowedMentions: {parse: ['users']},
   
    messageCacheLifetime: 43200,
    messageSweepInterval: 43200
  },


  monitorPings: {
    timeout: 600000,
    requests: [
      {
        name: 'jikan',
        url: 'https://api.jikan.moe/v3/character/1',
        registerAs: 'Jikan Latency',
        description: 'Jikan latency displays the average amount of time it takes to fetch data from MyAnimeList.net.'
      },{
        name: 'anilist',
        url: 'https://graphql.anilist.co',
        options: { method: 'POST', body: JSON.stringify({ query: `{Media{id}}`})},
        registerAs: 'AniList Latency',
        description: 'Anilist latency displays the average amount of time it takes to fetch data from Anilist.co.'
      },{
        name: 'reddit',
        url: 'https://reddit.com/r/animemes.json',
        registerAs: 'Reddit Latency',
        description: 'Reddit latency displays the time delay between sending requests and receiving data to and from reddit, respectively.'
      },{
        name: 'jisho',
        url: 'https://jisho.org/api/v1/search/words?keyword=konnichiwa' ,
        registerAs: 'Jisho Latency',
        description: 'Jisho latency displays the amout of time it takes to make a full round of sending-and-receiveing of data from them.'
      },
      {
        name: 'steam',
        url: 'https://store.steampowered.com/api/storesearch/?cc=us&l=en&term=DDLC',
        registerAs: 'Steam Latency',
        description: 'Steam latency displays the amount of time it takes to request and receive an information from the STEAM API'
      },{
        name: 'time',
        url: 'https://time.is/tokyo',
        registerAs: 'Time.is Latency',
        description: 'Time.is latency shows the time it takes to make a full request to the Time.is API'
      },{
        name: 'urban',
        function: require('relevant-urban')('start'),
        registerAs: 'Urban Latency',
        description: 'Urban latency shows the time it takes to make a full request to the Urban Dictionary API.'
      },
    ]
  },


  prefix: 'ms!',

  
  allowedFeatures: [ 'ANISCHEDULE', 'CHATBOT', 'EXPERIENCE_POINTS'],

  
  channels: { debug: '792385081850986496', votes: '809665224377761813', uploads: '728866550207086642', logs: '761935856331128837' },

  
  database: {
    enable: true,
    uri:'mongodb+srv://Mavie:jabreal1@mavie.unqbu.mongodb.net/test',
    config: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: false,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4
    }
  },
  
  
  owners: [ '850930679016980561' ],

 
  websites: {
    "repository":"https://github.com/maisans-maid/Mai#readme/",
    "website": "https://mai-san.ml/",
    "invite": "https://discord.com/oauth2/authorize?client_id=855161297913511996&scope=bot&permissions=8",
    "support": "https://discord.gg/4XMgFkCCyv",
    "docs": "https://mai-san.ml/docs/getting%20started/welcome/",
    "top.gg": "https://top.gg/bot/702074452317307061/",
    "DBL": "https://discordbotlist.com/bots/mai-3909/"
  }
};

module.exports = settings;
