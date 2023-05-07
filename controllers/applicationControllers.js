const goallistDAO = require('../models/applicationModel');
const db = new goallistDAO();
const userDao = require ('../models/userModel.js');

db.init();

exports.welcome_page = function(req, res) {
    res.render('welcome', {
        'user': req.cookies.jwt
    })
}

exports.about_page = function(req, res) {
    res.render('about')
}

exports.nutrition_page = function(req, res) {
    res.render('nutrition')
}

exports.sleep_page = function(req, res) {
    res.render('sleep')
}

exports.fitness_page = function(req, res) {
    res.render('fitness')
}

exports.profile_page = function(req, res) {
    res.render('profile')
}

exports.show_goals_page = function(req, res) {
    res.render('goals') 
}

exports.goals_page = function(req, res)
{   
const userValue = req.cookies.username;
console.log('Cookie is', req.cookies.username);
   db.getEntriesByUser(userValue)
    .then((entries) => {
        res.render('goals', {
        user: req.user,
        entries: entries
        }
        );
     })
    .catch((err) => {
        console.log('Error: ')
        console.log(JSON.stringify(err))
    });
}

exports.new_entries = function(req, res) {
    res.render('addgoal', {
    })
}

exports.post_new_entry = function(req, res) {
    db.addEntry(req.cookies.username, req.body.subject, req.body.contents);
}

exports.show_register_page = function(req, res) {
    res.render("user/register");
     }

exports.post_new_user = function(req, res) {
    const user = req.body.username;
    const password = req.body.pass;
    console.log(req.body);

    if (!user || !password) {
        res.send(401, 'no user or no password');
        return;
    }
    userDao.lookup(user, function(err, u) {
        if (u) {
            res.send(401, "User exists:", user)
            return;
        }
        userDao.create(user, password);
        console.log("register user", user, "password", password);
        res.redirect('/registersuccess');
    })
}

exports.show_login_page = function(req, res) {
    res.render('user/login');
}

exports.handle_login = function (req, res) {
    res.render('loginsuccess', {
        user: req.user,      
    })
}

exports.handle_logout = function (req, res) {
    res.render('loggedout', {
        user: req.user
    })
    res
        .clearCookie("jwt")
        .clearCookie("username")
        .status(200)
}

exports.handle_register = function (req, res) {
    res.render('registersuccess')
}
