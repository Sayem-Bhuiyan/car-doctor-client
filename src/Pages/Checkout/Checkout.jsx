import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {

  const service = useLoaderData();
  const {price, _id, title, img} = service;

  const {user}= useContext(AuthContext);

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
        
        customerName: name,
        imageURL: img,
        email, 
        date,
        price,
        service: title,
        service_id: _id
    }
    
    fetch('http://localhost:5000/bookings/', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  }
  
  return (
    <div>
      <h2>Book Service: {service.title}</h2>
      <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <form
        onSubmit={handleBookService}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-50">
            
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label htmlFor="firstName" className="text-sm">
                  Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="name"
                  placeholder="Enter Your First Name"
                  defaultValue={user?.displayName}
                  required
                  className="w-full py-3 pl-3 rounded-lg"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="date" className="text-sm">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  required
                  placeholder=""
                  className="w-full py-3 pl-3 rounded-lg"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Last Name
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  required
                  placeholder="Enter Your Email"
                  className="w-full py-3 pl-3 rounded-lg"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Due Amount
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  required
                  placeholder="Service Price"
                  defaultValue={"$"+ price}
                  className="w-full py-3 pl-3 rounded-lg"
                />
              </div>
              <div className="col-span-full">
                <input type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Confrim Order" />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
