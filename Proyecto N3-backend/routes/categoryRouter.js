// En tu archivo de configuración de rutas en el servidor
const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');

// Manejador de ruta para obtener una categoría por ID
router.get('/category/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
});

module.exports = router;
