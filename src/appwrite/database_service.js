import conf from "../conf/conf"
import {Client, ID,Databases, Storage, Query } from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket= new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
          return await this.databases.createDocument(
             conf.appwriteDatabaseId,
             conf.appwriteCollectionId,
             slug,
             {
                title,
                content,
                featuredImage,
                status,
                userId
             }
          )  
        } catch (error) {
            console.log("Appwrite  Database service: Create Post",error);
        }
    }

    async updatePost(slug,{title, content , featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content,status
                }
            )
        } catch (error) {
            console.log("Appwrite  Database service:: Update Post",error);
        }
    }
}

const  service = new Service();
 export default service