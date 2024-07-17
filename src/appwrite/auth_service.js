import { Client,Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client= new Client();                                       // Create Property  using New Keyword
    account;                                                    // Variable
    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId)       
                this.account=new Account(this.client)           // add client value to account variable
    }

//   create user account method
  async createAccount({email, password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name );
            if(userAccount){
                // call another method
                return this.login(email, password)
            }
            else{
                return userAccount
            }
        }
        catch(error){
            throw error
        }
}
//  User login method
 async login(email, password){
    try{
        return await this.account.createEmailSession(email, password)
    }catch(error){
        throw error
    }
 } 
  
//  current user available is and  not  in Home Page
 async getCurrentUser(){
    try{
      return await this.account.get();
    }catch(error){
        throw error
    }
    return null;
  }

// user LogOut Methed 
async logout(){
    try{
     await this.account.deleteSessions();
    }catch(error){
        console.log("logOut appwrite error ::",error)
    }
}

}



const authservice= new AuthService()


export default AuthService;
