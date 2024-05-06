import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className="mt-5">
            <div className="text-center space-y-2">
                <h3 className="text-xl text-[#FF3811] font-bold">Service</h3>
                <h1 className="text-[45px] text-[#151515] font-bold">Our Service Area</h1>
                <p className="text-base text-[#737373] max-w-3xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id}  service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;