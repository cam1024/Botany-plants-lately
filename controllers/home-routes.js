const router = require('express').Router();
const { User, Plant } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    
    res.render(
      'homepage');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plants/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const plant = plantData.get({ plain: true });

    res.render('plants', {
      plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, (req, res) => {

  res.render(
    'dashboard',
    {
      logged_in: req.session.logged_in
    }
  )

});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;