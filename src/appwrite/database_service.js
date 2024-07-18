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

// create post 
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

    // update post 
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

    // delete post by appwrite service (slug => documentId)
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite  Database service:: delete Post",error);
            return false
        }
    }

    //  get One (single )   Post 
    async getSinglePost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )  
        } catch (error) {
            console.log("Appwrite  Database service:: GET single  Post",error);
        }
    }

    // List of Post (all post)
    async getAllPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite  Database service:: GET ALL Posts",error);
            return false
        }

    }
}

const  service = new Service();
 export default service