import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, price, img} = service;
  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="mt-5 space-y-2">
        <h2 className="card-title ">{title}</h2>
        
        <div className="flex justify-between items-center">
        <p className='text-[#FF3811] font-semibold text-xl'>Price: ${price}</p>
          <Link className='text-[#FF3811] font-semibold text-xl' to={`/checkout/${_id}`}><FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;
