// spots-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const spots = new Schema(
    {
      name: String,
      type: String,
      description: String,
      difficulty: String,
      location: {
        lat: Number,
        lng: Number,
        placeId: String,
        address: String
      },
      indoor: Boolean,
      media: {
        pictures: [String],
        videos: [String]
      }
    },
    { 
      collection: 'spots',
      timestamps: true,
    }
  );

  return mongooseClient.model('spots', spots);
};

