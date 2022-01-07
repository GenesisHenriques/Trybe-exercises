const { ObjectId } = require("mongodb");
const { use } = require("./controller/artist/router");

use('music')
db.song.remove({});
db.artist.remove({});

db.artist.insertMany([
  {
    _id: ObjectId("5f62bb4d0c1dd24e7600ec7"),
    name: 'Angra',
    genres: ['power metal', 'folk metal', 'progressive metal']
  },
  {
    _id: ObjectId("5f62bb4d0c1dd24e7600ec8"),
    name: 'Nina Simone',
    genres: ['R&B', 'blues', 'disco']
  },
  {
    _id: ObjectId("5f62bb4d0c1dd24e7600ec9"),
    name: 'Daft Punk',
    genres: ['French house', 'disco']
  },
  {
    _id: ObjectId("5f62bb4d0c1dd24e7600eca"),
    name: 'Alok',
    genres: ['Eletronica', 'Deep house']
  }
]);

use('music')
db.song.insertMany([
  {
    _id: ObjectId("5f762ca643893a773b2a5e48"),
    artist_id: ObjectId("5f62bb4d0c1dd24e7600ec9"),
    name: "Instant Crush",
    album: "Random access Memories"
  },
  {
    _id: ObjectId("5f762d3f43893a773b2a5e4b"),
    artist_id: ObjectId("5f62bb4d0c1dd24e7600eca"),
    name: "Wicked game",
    album: "Controversia"
  }
]);