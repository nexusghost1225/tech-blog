const router = require('express').Router();
const profiles = require('../../models/profiles');

// route to create/add a profiles using async/await
router.post('/', async (req, res) => {
  try { 
    const profilesData = await profiles.create({
    profiles_name: req.body.profiles_name,
    description: req.body.description,
    password: req.body.password,
  });
  // if the profiles is successfully created, the new response will be returned as json
  res.status(200).json(profilesData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
