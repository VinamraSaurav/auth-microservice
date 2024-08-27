const { User } = require("../models/index")

class UserRepository{
    async create(data){
        try{
            const user = await User.create(data);
            return user;
        } catch (error){
            console.error("Something went wrong in UserRepository.create:", error);
            return null;
        }
    }

    async destroy(userId){
        try{
            await User.destroy({
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

module.exports = new UserRepository();