const jwt = require('jsonwebtoken');

const generarToken = (usuarioId) => {
  const token = jwt.sign({ id: usuarioId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. No se proporcionó un token válido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token inválido.' });
  }
};

module.exports = {
  generarToken,
  verificarToken,
};
