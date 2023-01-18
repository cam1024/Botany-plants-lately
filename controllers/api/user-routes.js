const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  
  try{
    const userData = await User.findAll({
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.dataValues.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/',withAuth, async (req, res) => {
  try {
    const userData = await User.update({
      where: {
        first_name: req.params.first_name,
        last_name: req.params.last_name,
        username: req.params.username,
        email: req.params.email,
        password: req.params.password
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No User found!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/',withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
        first_name: req.params.first_name,
        last_name: req.params.last_name,
        username: req.params.username,
        email: req.params.email,
        password: req.params.password
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No User found!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  // console.log(req.body.username)
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    //console.log('userData is', userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    // console.log(req.body.password)
    // console.log('password is', validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
     console.log('test is', userData.dataValues.id)
    req.session.save(() => {
      req.session.user_id = userData.dataValues.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    // console.log('err is', err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
