exports.login = (req, res) => {
    const { email, password } = req.body;
  
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Incorrect email or password' });
        }
  
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: err.message });
          }
  
          if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect email or password' });
          }
  
          const token = user.generateJWT();
          res.json({ message: 'Successfully logged in', token });
        });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  };
  