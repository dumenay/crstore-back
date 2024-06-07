// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import { sequelize } from '../config/config';
import Users from '../models/usersModel';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Users.findAll();
      return res.status(200).send({
        message: 'Dados Encontrados',
        response,
      });
    }

    const response = await Users.findOne({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: 'Dados Encontrados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      username, cpf, name, phone, passwordHash, token, role, cart, email, recuperation,
    } = req.body;
    const response = await Users.create(
      {
        username,
        cpf,
        name,
        phone,
        passwordHash,
        token,
        role,
        cart,
        email,
        recuperation,
      },
    );
    return res.status(200).send({
      message: 'Dados Criados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Users.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Users.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }
    await response.destroy();
    return res.status(200).send({
      message: 'Dados Destruidos',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

// const register = async (req, res) => {
//   try {
//     const { login, password } = req.body;
//     // const response = await Users.findOne({
//     //   where: {
//     //     login,
//     //   },
//     // });
//     // if (response) {
//     //   throw new Error('Username ja foi utilizado!');
//     // }
//     bcrypt.hash(password, 10, async (err, hash) => {
//       await Users.create({
//         login,
//         passwordHash: hash,
//       });
//     });
//     return res.status(201).send({
//       message: req.body,
//     });

//     // const { login, password } = req.body;
//     // const user = Users.findOne({
//     //   where: {
//     //     login,
//     //   },
//     // });
//     // if (!user){
//     // throw new Error('Usuario ou senha invalidos');
//     // };
//     // const passwordHash = user.passwordHash;
//     // const resposta = bcrypt.compare(password, passwordHash);

//     // if (resposta){
//     // const token = jwt.sign({ userId: user.id, userName: user.name }, process.env.SECRET_KEY,
//     // { algorithm: 'ES256', expiresIn: '1h' });
//     //   return res.status(200).send({
//     //     token,
//     //   });
//     // }

//     // return res.status(400).send({
//     //   message: 'Usuario ou senha invalidos'
//     // });
//   } catch (error) {
//     return res.status(500).send({
//       message: 'Ops',
//       response: error.message,
//     });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await Users.findOne({
//       where: {
//         login: username,
//       },
//     });
//     if (!user) {
//       throw new Error('Usuario ou senha invalidos');
//     }
//     const { passwordHash } = user.passwordHash;
//     const resposta = bcrypt.compare(password, passwordHash);

//     if (resposta) {
// eslint-disable-next-line max-len
//       const token = jwt.sign({ userId: user.id, userName: user.name }, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '1h' });
//       return res.status(200).send({
//         token,
//       });
//     }

//     return res.status(400).send({
//       message: 'Usuario ou senha invalidos',
//     });
//   } catch (error) {
//     return res.status(500).send({
//       message: 'Ops',
//       response: error.message,
//     });
//   }
// };

export default {
  get,
  create,
  update,
  destroy,
  // register,
  // login,
};
