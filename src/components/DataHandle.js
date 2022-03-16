import SignInform from "./SignInform";

function dataHandle(props) {

  const onSaveDataHandler = (enterdData) =>
  {
    const personData={
      ...enterdData,
      id : Math.floor( 10 +  Math.random().toString()*90)

    }  
    //console.log(personData)
    props.personData(personData);
    
  }
 

  return (
    <div className="">
       
    <body>
   
  <SignInform  onsaveData={onSaveDataHandler} />
    
    </body>
  </div>
);
 }
 
 export default dataHandle;
 