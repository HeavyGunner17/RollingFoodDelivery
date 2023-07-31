const { Router } = require('express');
const multer = require('multer');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = Router();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get('/', getAllProducts);
router.post('/create', upload.single('img'), createProduct);
router.put('/:idProducto', updateProduct);
router.delete('/:idProducto', deleteProduct);

module.exports = router;
