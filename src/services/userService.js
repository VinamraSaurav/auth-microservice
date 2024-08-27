const {UserRepository} = require('../repositories/userRepository')

class UserService{
    constructor(){
        this.userRepository = UserRepository;
    }

    async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch (error){
            console.error("Something went wrong in UserService.create:", error);
            return null;
        }
    }

    async destroy(userId){
        try{
            const result = await this.userRepository.destroy(userId);
            return result;
        } catch (error){
            console.error("Something went wrong in UserService.destroy:", error);
            return false;
        }
    }
}

module.exports = new UserService();