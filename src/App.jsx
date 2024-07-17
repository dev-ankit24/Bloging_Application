import './App.css'
import conf from './conf/conf';
function App() {
  console.log(conf.appwriteBucketId);
  console.log(conf.appwriteCollectionId);
  console.log(conf.appwriteDatabaseId);
  console.log(conf.appwriteProjectId);
  return (
    <>
    <h1>hello</h1>
    <h3>{
  conf.appwriteUrl
      
      }</h3>
       
    </>
  )
}

export default App
