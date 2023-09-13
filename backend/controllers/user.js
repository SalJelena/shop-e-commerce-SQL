
const User = require("../models/user")
const { userResponseParser } = require("../parser/userResponseParser")
const { connect } = require("../util/database")

exports.UserController = {

    async getUserByEmail(email) {
        const user = await User.findOne({
            where: { email: email },
          })
        
        return user
    },

    async getUser(req, res) {
        await connect()

        let user  = await User.findByPk(req.params.id)

        if(!user)
        res.status(404).json({errors: {msg: "User not found"}})

        else 
        res.send(userResponseParser(user))
    },

    async updateUser(req, res) {
        await connect()

        let body = req.body

        for(let k in body) {
            if(k == "password")
            delete body[k]

            else if(body[k] == null || body[k] === undefined)
            delete body[k]
        }
    
        let user = await User.update(body, {where: {id: req.params.id}})

        res.send({message: "User updated successfully"})

    },

    async deleteUser(req, res) {
        await connect()

        let user  = await User.findByPk(req.params.id)

        if(!user)
        res.status(404).json({errors: {msg: "User not found"}})

        else {
            user.destroy()
            res.send({message: "User deleted successfully"})
        }
    }
}