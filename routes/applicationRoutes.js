const express = require('express');
const router = express.Router();
const controller = require('../controllers/applicationControllers.js');
const {login} = require('../auth/auth.js');
const {verify} = require('../auth/auth.js');

router.get("/", controller.welcome_page);
router.get('/about', controller.about_page);

router.get('/register', controller.show_register_page);
router.post('/register', controller.post_new_user);

router.get('/registersuccess', controller.handle_register);

router.get('/login', controller.show_login_page);
router.post('/login', login, controller.handle_login);
router.get('/loggedout', verify, controller.handle_logout);

router.get('/profile', verify, controller.profile_page);

router.get('/goals', verify, controller.goals_page);

router.get('/addgoal', verify, controller.new_entries);
router.post('/new', verify, controller.post_new_entry);

router.get('/nutrition', verify, controller.nutrition_page);
router.get('/sleep', verify, controller.sleep_page);
router.get('/fitness', verify, controller.fitness_page);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found. Uh oh.');
})

router.use(function(err, req, res, next) {
    res.status(500);
    console.log(err);
    res.type('text/plain');
    res.send('Internal Server Error. Woops.');
})

router.use(function(err, req, res) {
    res.status(403);
    console.log(err);
    res.type('text/plain');
    res.send('Access Denied!');
})

module.exports = router;