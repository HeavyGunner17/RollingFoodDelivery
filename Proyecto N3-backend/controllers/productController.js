const Product = require('../models/productsModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      ok: true,
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hubo un error al obtener los productos',
    });
  }
};

const createProduct = async (req, res) => {
  const { name, price, description, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      img: req.file.filename,
    });

    await newProduct.save();

    res.json({
      ok: true,
      message: 'Producto creado exitosamente',
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hubo un error al crear el producto',
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category } = req.body;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        ok: false,
        message: 'Producto no encontrado',
      });
    }

    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;

    await product.save();

    res.json({
      ok: true,
      message: 'Producto actualizado exitosamente',
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hubo un error al actualizar el producto',
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        ok: false,
        message: 'Producto no encontrado',
      });
    }

    res.json({
      ok: true,
      message: 'Producto eliminado exitosamente',
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hubo un error al eliminar el producto',
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
