{

  "host": "localhost",
  "port": 3000,

  "keyLength": 5,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "memcached",
    "host": "",
    "port": "",
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  }

}
