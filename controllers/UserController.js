const User = require("../models/UserModel")

exports.user = async (req, res) => {
    const users = await User.find()
    res.render('UserView', users)
}

exports.add = async (req, res) => {
    const user = new User({
		name: req.body.name,
		email: req.body.email,
        role: req.body.role
	})
	await user.save()

    res.send(user)
}