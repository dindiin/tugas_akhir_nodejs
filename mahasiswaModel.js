// mahasiswaModel.js

var mongoose = require('mongoose');

// setup schema
var mahasiswaSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  semester: String
});

// export mahasiswa model
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
}
