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
            return null;
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
            return false;
        }
    }
}

module.exports = {
    UserRepository : new UserRepository()
}