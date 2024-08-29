const { where } = require("sequelize");
const { User } = require("../models/index")

class UserRepository{
    constructor(){
        this.model = User;
    }
    async create(data){
        try{
            const user = await this.model.create(data);
            return user;
        } catch (error){
            console.error("Something went wrong in UserRepository.create:", error);
            throw error;
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
}

module.exports = {
    UserRepository : new UserRepository()
}