import {useState} from 'react'
import './SignInform.css'

function SignInform(props)
{   
    const [enteredfirstName,setfirstname] = useState('');
    const [enteredlastName,setlastname]=useState('');
    const [enteredAddress,setAddress]=useState('');
    const [enteredMno,setMno]= useState('');

    function firstNameHandler(event)
    {
        setfirstname(event.target.value);
    }
    function lastNameHandler(event)
    {
        setlastname(event.target.value);
    }
    function addressHandler(event)
    {
        setAddress(event.target.value);
    }
    function mnoHandler(event)
    {
        setMno(event.target.value);
    }

    function onSubmitHandler(event)
    {
        event.preventDefault();
        const Data={
            firstName:enteredfirstName,
            lastName:enteredlastName,
            address:enteredAddress,
            mno:enteredMno

        }
        //console.log(Data)
        props.onsaveData(Data);
        setfirstname('');
        setlastname('');
        setAddress('');
        setMno('');
        
    }
    
    return(
        
        <div className='Input-form'>
                   <form onSubmit={onSubmitHandler}>
                       <div className='Input'>
              <label name="fname">First Name</label>
              <input type="text" name="firstname" onChange={firstNameHandler} value={enteredfirstName}></input>
              </div>
             
              <div className='Input'>
              <label name="lname">Last Name</label>
              <input type="text"  name="lastname" onChange={lastNameHandler} value={enteredlastName}></input>
              </div>
             
              <div className='Input'>
              <label name="fname">Address</label>
              <input type="text" name="Address" onChange={addressHandler} value={enteredAddress} ></input>
            </div>
              
              <div className='Input'>
              <label name="fname">Mobile Number</label>
              <input type="text" name="Mobile Number" onChange={mnoHandler} value={enteredMno}></input>
            </div>
             
            <input type="submit" value="submit"></input>
          
            
             
            </form>
                </div>
              
            
    );
};
export default SignInform;