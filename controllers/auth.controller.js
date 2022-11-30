const User = require('../models/user.model');

function getSignup(req, res) {
  res.render('customer/auth/signup');


}

async function signup(req, res) {
  try{
    console.log(req)
    const user = await User.create(req.body);
    
    console.log(user);

    res.status(201).json(user).redirect('/login'); 
  } catch (e) {
    res.status(500).json({ e });
  }
  
}


function getLogin(req, res) {


}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup:signup
};