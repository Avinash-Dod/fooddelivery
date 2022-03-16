import './HeaderComponent.css'
function HeaderComponent()
{
    return ( 
    <div className="header">
  <a href="#default" className="logo">Fun N Food</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
    );
};
export default HeaderComponent;