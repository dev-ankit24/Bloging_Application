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
}

const authservice= new AuthService()


export default AuthService;
