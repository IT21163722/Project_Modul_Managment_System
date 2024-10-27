import './Nav.css'

// eslint-disable-next-line react/prop-types
const Nav = ({ Icon, title, onClick }) => {
  return (
    <div className="nav" onClick={onClick}>
     {Icon && <Icon className="icon" />}
        <h2>{title ? title : null}</h2>
    </div>
  );
};

export default Nav;
