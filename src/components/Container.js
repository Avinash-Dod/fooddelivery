function Container(props)
{
    return(
        <div className="">
      
      {props.Details.map((exp) => ( 
         <div>
           
          <ul><strong>
<div className="name">

<li> {exp.firstName}</li>
</div>
<div className="lastname">

<li> {exp.lastName}</li>  
</div>
<div className="Address">

<li> {exp.Address}</li> 
</div>
<div className="MNO">

<li> {exp.mno}</li>
</div></strong>
</ul>

          </div>
        ))}

    </div>


    )
}
export default Container;