function Container(props)
{
    return(
        <div className="container-fluid">
        <h1>Welcome</h1>
        <ul>
        <div className="name">
        
        <li> {props.Details[0].firstName}</li>
        </div>
        <div className="lastname">
        
        <li> {props.Details[0].lastName}</li>  
        </div>
        <div className="Address">
        
        <li> {props.Details[0].Address}</li> 
        </div>
        <div className="MNO">
        
        <li> {props.Details[0].mno}</li>
        </div>
        </ul>
        </div>

    );
}
export default Container;