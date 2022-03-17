//import InputForm from "./InputForm";
import SignInform from "./SignInform";


function DataHandle(props) {

  const DataHandler = (enteredData) =>
  {
    const pData={
      ...enteredData,
      id : Math.floor( 10 +  Math.random().toString()*90)

    }  
    console.log(pData)
    props.sendData(pData);
    
  }
 

  return (
    <div className="">
       
    <body>
   
  <SignInform  onSaveData={DataHandler} />
    
    </body>
  </div>
);
 }
 
 export default DataHandle;
 