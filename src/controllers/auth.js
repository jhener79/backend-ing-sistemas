const { response } = require('express');

const loginUsuario = ( req, res = response ) => {

  res.json({
    ok: true,
    message: 'login usuario'
  })
  
}

module.exports = {
  loginUsuario
}