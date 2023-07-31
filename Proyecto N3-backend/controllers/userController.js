
const Usuario = require("../models/userModel");
const { generarJWT } = require("../utils/jwt");
const { validationResult } = require("express-validator");

const login = async (req, res) => {
  const { user, password } = req.body;
  try {
    const usuarioDB = await Usuario.findOne({ user });

    if (!usuarioDB) {
      return res.status(500).json({
        ok: false,
        msj: "Usuario no encontrado",
      });
    }

    const validarPassword = await bcrypt.compare(password, usuarioDB.password);

    if (!validarPassword) {
      return res.json({
        ok: false,
        msj: "Contraseña incorrecta",
      });
    }

    const userToken = await generarJWT(usuarioDB._id);

    res.json({
      ok: true,
      usuario: usuarioDB,
      token: userToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msj: "Hubo un error",
    });
  }
};

const register = async (req, res) => {
  const errors = validationResult(req);
  const { firstName, lastName, user, password, email, phone, role } = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.array(),
      msj: "Usuario o contraseña incorrecta",
    });
  }

  try {
    const usuarioDB = await Usuario.findOne({ user });

    if (usuarioDB) {
      return res.json({
        ok: false,
        msj: "Usuario ya registrado",
      });
    }

    const passwordEncrypt = await bcrypt.hash(password, 12);
//NUEVO USER
    const newUser = new Usuario({
      firstName,
      lastName,
      user,
      password: passwordEncrypt,
      email,
      phone,
      role,
    });
    
    await newUser.save();

    res.json({
      ok: true,
      msj: "Se creó el usuario con éxito",
      usuario: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msj: "Hubo un error al crear el usuario",
    });
  }
};

const getUsers = async (req, res) => {
    try {
      const users = await Usuario.find();
      res.json({
        ok: true,
        usuarios: users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msj: "Hubo un error al obtener los usuarios",
      });
    }
  };
module.exports = {
  login,
  register,
  getUsers,
};
