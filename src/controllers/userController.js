const e = require('express');
const { UserService } = require('../services/userService');

const create = async (req, res) => {
    try{
        const data = req.body;
        const user = await UserService.create({
            email: data.email,
            password: data.password
        });
        if(user){
           return res.status(201).json({
                message: "User created successfully",
                success: true,
                data: user,
                error: null
           });
        } else {
            return res.status(400).json({
                message: "User could not be created",
                success: false,
                data: {}
            });
        }
    } catch (error){
        console.error("Something went wrong in userController.create:", error);
        return res.status(500).json({
            message: "Something went wrong",
            data : {},
            success: false,
            error: error
        });
    }
}

// const destroy = async (req, res) => {
//     try{
//         const userId = req.params.id;
//         const result = await UserService.destroy(userId);
//         if(result){
//             return res.status(200).json({
//                 message: "User deleted successfully",
//                 success: true,
//                 data: {}
//             });
//         } else {
//             return res.status(400).json({
//                 message: "User could not be deleted",
//                 success: false,
//                 data: {}
//             });
//         }
//     } catch{
//         console.error("Something went wrong in userController.destroy:", error);
//         return res.status(500).json({
//             message: "Something went wrong",
//             data: {},
//             success: false,
//             error: error
//         });
//     }
// }

module.exports = {
    create,
    // destroy
}