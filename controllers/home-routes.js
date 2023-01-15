require('dotenv').config()
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

router.get('/plantsearch/:plant', async (req, res) => {

  console.log(req.hostname)
  // The parameters for our POST request
  const params = {
    origin: req.hostname,
    token: process.env.TOKEN
  }


  try {
    let response = await fetch(
      'https://trefle.io/api/auth/claim', {
      method: 'post',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    });
    response = await response.json()

    const url = `https://trefle.io/api/v1/plants?${req.body.plant}&token=${response.token}`;
    const getplants = await fetch(url)
    const { data } = await getplants.json()
    console.log(data)
    res.render(
      'homepage', { data });

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

router.get('/register', async (req, res) => {
  try {

    res.render(
      'register');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/holistic', async (req, res) => {
  try {

    res.render(
      'holistic');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/zodiac', async (req, res) => {
  try {

    res.render(
      'zodiac');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render(
      'profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;