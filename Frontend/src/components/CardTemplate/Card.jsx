import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ Icon, title, value }) => {
  return (
    <div className='card'>
        <Icon className="icon" />
        {title && <h2 className="title">{title}</h2>}
        {value && <h2 className="value">{value}</h2>}
    </div>
  );
};

export default Card;
