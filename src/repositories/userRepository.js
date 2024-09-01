const { where } = require("sequelize");
const { User, Role } = require("../models/index")
const ValidationError  = require("../utils/validation-error-handler");
const AppError = require("../utils/error-handlers");
const ClientError = require("../utils/client-error");
const { StatusCodes } = require("http-status-codes");

class UserRepository{
    constructor(){
        this.model = User;
    }
    async create(data){
        try{
            const user = await this.model.create(data);
            return user;
        } catch (error){
            if(error.name === "SequelizeValidationError"){
                let validationError = new ValidationError(error);
                throw validationError;
            }
            console.error("Something went wrong in UserRepository.create:", error);
            throw new AppError();
        }
    }

    async destroy(userId){
        try{
            await this.model.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error){
            console.error("Something went wrong in UserRepository.destroy:", error);
            throw error;
        }
    }

    async findByEmail(email){
        try{
            const user = await this.model.findOne(
                {
                where: {
                    email: email
                }
            });
            if(!user){
                throw new ClientError(
                    "AttributeNotFound",
                    "Email not found",
                    "Please check the email and try again",
                    StatusCodes.NOT_FOUND
                )
            }
            return user;
        } catch (error){
            console.error("Something went wrong in UserRepository.findByEmail:", error);
            throw error;
        }
    }

    async getById(userId){
        try{
            const user = await this.model.findOne(
                {
                    attributes: {
                        exclude: ['password'],
                    },
                    where: {
                        id : userId
                    }
                },
            );
            return user;
        } catch (error){
            console.error("Something went wrong in UserRepository.findById:", error);
            throw error;
        }
    }

    async isAdmin(userId){
        try{
            const user = await this.model.findOne(
                {
                    where: {
                        id: userId,
                    }
                }
            );
            
            const adminRole = await Role.findOne({
                where:{
                    name: "admin"
                }
            })


            const response = await  user.hasRole(adminRole);
            // console.log(response);
            return response;
        } catch(error){
            console.error("Something went wrong in UserRepository.isAdmin:", error);
            throw error;
        }
    }
}

module.exports = {
    UserRepository : new UserRepository()
}