const { authVerify } = require("../middlewares/authVerify");
const User = require("../models/user");
const { UserController } = require("./user");
const bcrypt = require("bcrypt");

exports.authController = {

    async getRegisterPage(req, res) {
        res.render('auth/register', {
            pageTitle: 'Register',
            path: '/auth/register'
        })
    },

    async getLoginPage(req, res) {
        res.render('auth/login', {
            pageTitle: 'Login',
            path: '/auth/login'
        })
    },

    async register(req, res) {
      await connect();
  
      let user = await UserController.getUserByEmail(req.body.email);
  
      if (user)
        return res
          .status(400)
          .json({ errors: { msg: "User account already exists" } });
  
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  
      user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        contact: req.body.contact,
      });

      res.send('OK')
  
      const token = authVerify.createToken({email:user.email}, true)
  
      res.cookie("refresh_token", token.refresh_token, {
          expires: new Date(Date.now() + 30 * 24 * 360000),
          httpOnly: true,
        });
  
      res.send({...userResponseParser(user), access_token: token.access_token});
    },

    async login(req, res) {
      await connect();
  
      let user = await UserController.getUserByEmail(req.body.email);
  
      if (!user)
        return res.status(404).json({ errors: { msg: "Please register" } });
  
      if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = authVerify.createToken({email:user.email}, true)
  
          res.cookie("refresh_token", token.refresh_token, {
              expires: new Date(Date.now() + 30 * 24 * 360000),
              httpOnly: true,
            });
            res.send({...userResponseParser(user), access_token: token.access_token});
      }
  
      else res.status(400).json({ errors: { msg: "Incorrect password" } });
    },
  };