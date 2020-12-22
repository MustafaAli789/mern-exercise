const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{ //when accessing localhost/users/ this endpoint will be accessed
    User.find() // returns a list of all users from mongodb atlas database
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error '+ err));
});

router.route('/add').post((req, res)=>{ //when accessing localhost/users/add this endpoint will be accessed
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(()=>res.json('User Added'))
        .catch(err=>res.status(400).json('Error: ' + err))
});

module.exports = router;