const {UserRepository} = require('../repositories/userRepository')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/serverConfig');

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
            throw error
        }
    }

    async destroy(userId){
        try{
            const result = await this.userRepository.destroy(userId);
            return result;
        } catch (error){
            console.error("Something went wrong in UserService.destroy:", error);
            throw error;
        }
    }

    async findByEmail(email){
        try{
            const user = await this.userRepository.findByEmail(email);
            return user;
        } catch (error){
            console.error("Something went wrong in UserService.findByEmail:", error);
            throw error;
        }
    }

    async getById(userId){
        try{
            const user = await this.userRepository.getById(userId);
            return user;
        } catch (error){
            console.log("Something went wrong in UserService.getById:", error);
            throw error
        }
    }

    async signIn(email, password){
        try{
            const user = await this.findByEmail(email);
            if(user){
                const isValid = this.checkPassword(password, user.password);
                if(isValid){
                    const token = this.generateToken(user);
                    return token;
                } else {
                    throw {error : "Invalid Password"}
                }
            } else {
                throw {error : "User not found"}
            }
        } catch(error){
            console.error("Something went wrong in UserService.signIn:", error);
            throw error;
        }
    }

    async isAuthenticated(token){
        try{
            const decoded = this.validateToken(token);
            if(!decoded){
                throw {error : "Invalid Token"};
            }
            // console.log(decoded);
            const user = await this.getById(decoded.id);
            // console.log(user);
            if(user){
                return user;
            } else {
                throw {error : "User not found"}
            }
        } catch(error){
            console.error("Something went wrong in UserService.isAuthenticated:", error);
            throw error;
        }
    }

    generateToken(user){
        try{
            const token = jwt.sign({
                id : user.id,
                email : user.email
            },
            JWT_SECRET,
            {
                expiresIn: '1h'
            });
            return token;
        } catch(error){
            console.error("Something went wrong in UserService.generateToken:", error);
            throw error;
        }
    }

    validateToken(token){
        try{
            const decoded =  jwt.verify(token, JWT_SECRET);
            return decoded;
        } catch(error){
            console.error("Something went wrong in UserService.validateToken:", error);
            throw error;
        }
    }

    checkPassword(password, hash){
        try{
            const result =  bcrypt.compareSync(password, hash);
            return result;
        } catch(error){
            console.error("Something went wrong in UserService.checkPassword:", error);
            throw error;
        }
    }
}

module.exports = {
    UserService : new UserService()
}