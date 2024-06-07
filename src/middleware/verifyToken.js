// import jwt from 'jsonwebtoken';
// import Users from '../models/usersModel';

// export default async (req, res, next) => {
//   try {
//     const token = req.headers.authorization || null;
//     if (!token || token === 'Bearer') {
//       return res.status(401).send({
//         message: 'Nao autorizado',
//       });
//     }
//     const [, tokenLimpo] = token.split(' ');

//     const decodedToken = jwt.verify(tokenLimpo, process.env.SECRET_KEY);
//     if (!decodedToken) {
//       return res.status(401).send({
//         message: 'Nao autorizado',
//       });
//     }
//     if (decodedToken.exp < (Date.now() / 1000)) {
//       return res.status(401).send({
//         message: 'Token expirado, faca login novamente',
//       });
//     }
//     const users = await Users.findOne({
//       where: {
//         id: decodedToken.userId,
//       },
//     });
//     if (!users) {
//       return res.status(401).send({
//         message: 'Conta incorreta',
//       });
//     }

//     next();
//   } catch (error) {
//     return res.status(401).send({
//       message: 'Ops',
//     });
//   }
// };
