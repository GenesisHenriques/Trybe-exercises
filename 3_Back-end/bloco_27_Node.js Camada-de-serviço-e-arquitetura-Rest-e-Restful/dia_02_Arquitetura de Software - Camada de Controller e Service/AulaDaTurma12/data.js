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