import PropTypes from "prop-types";

const BookingsRow = ({ booking, bookings, setBookings }) => {
  const { _id, imageURL, date, service, price } = booking;

  const handleDelete = (_id) => {
    const proceed = confirm('Are you sure to delete?');
    if(proceed){
      fetch(`http://localhost:5000/bookings/${_id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        if(data.deletedCount > 0){
          alert('Booking Deleted')
          const remaining = bookings.filter(booking => booking._id !== _id);
        setBookings(remaining)
        }
      })
    }
  }
  return (
    <tr>
      <th>
        <button onClick={ () => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {imageURL && <img src={imageURL} alt="" />}
            </div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

BookingsRow.propTypes = {
  booking: PropTypes.object,
  bookings: PropTypes.array,
  setBookings: PropTypes.func,
};

export default BookingsRow;
