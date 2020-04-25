// mahasiswaController.js

// Import mahasiswa model
Mahasiswa = require('./mahasiswaModel');

// Handle index actions
exports.index = function (req, res) {
  Mahasiswa.get(function (err, mahasiswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Data mahasiswa berhasil didapatkan",
      data: mahasiswa
    });
  });
};

// Handle create mahasiswa actions
exports.new = function (req, res) {
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  // save the contact and check for errors
  mahasiswa.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
      message: 'Mahasiswa baru terdaftar!',
      data: mahasiswa
    });
  });
};

// Handle view mahasiswa info
exports.view = function (req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
    if (err)
      res.send(err);
    res.json({
      message: 'Mahasiswa details loading..',
      data: mahasiswa
    });
  });
};

// Handle update mahasiswa info
exports.update = function (req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
    if (err)
      res.send(err);
    mahasiswa.nim = req.body.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    //save the mahasiswa and check for errors
    mahasiswa.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Mahasiswa info updated',
        data: mahasiswa
      });
    });
  });
};

// Handle delete mahasiswa
exports.delete = function (req, res) {
  Mahasiswa.remove({
    _id: req.params.mahasiswa_id
  }, function (err, mahasiswa) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Mahasiswa deleted'
    });
  });
};
