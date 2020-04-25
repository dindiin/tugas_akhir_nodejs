// initialize express router
let router = require('express').Router();

// set default api response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Wellcome to RESThub crafted'
  });
});

// import mahasiswaController
var mahasiswaController = require('./mahasiswaController');

// mahasiswa Routes
router.route('/mahasiswa')
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

//export API
module.exports = router;
