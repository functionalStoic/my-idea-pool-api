import User from '../models/User';

import jsonwebtoken from 'jsonwebtoken';
import { v4 } from 'uuid';

export const signup = async (req, res) => {
  const { email, name, password } = req.body;

  const refresh_token = v4();
  try {
    const user = await User.query().insert({
      email,
      name,
      password,
      refresh_token
    });

    const jwt = jsonwebtoken.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );

    res.status(201).json({ jwt, refresh_token });
  } catch ({ data, detail }) {
    if (data) {
      res.status(400).json({ data });
    } else {
      res.status(400).json({
        data: {
          email: [
            {
              message: 'should be unique',
              keyword: 'type',
              params: {
                type: 'email'
              }
            }
          ]
        }
      });
    }
  }
};
// export const getUserInfo = async (req, res) => {};
// export const refreshToken = async (req, res) => {};
// export const login = async (req, res) => {};
// export const logout = async (req, res) => {};

// app.post('/login', function (req, res, next) {
//   var username = req.body.username
//   var password = req.body.password
//   var user = {
//     'username': username,
//     'role': 'admin'
//   }
//   var token = jwt.sign(user, SECRET, { expiresIn: 300 })
//   var refreshToken = uuid()
//   refreshTokens[refreshToken] = username res.json({token: 'JWT ' + token, refreshToken: refreshToken})
// });
