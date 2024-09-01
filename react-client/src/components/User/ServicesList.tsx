import React, { useEffect, useState } from 'react';
import { getServices } from '../../api/services';
import { Link } from 'react-router-dom';
import {  Service} from "../../interfaces/Service";


export const Services = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
              const servicesData = await getServices();
              if (servicesData && Array.isArray(servicesData.services)) {
                setServices(servicesData.services); 
              } else {
                console.error('Unexpected data format:', servicesData); 
              }
              } catch (error) {
              console.error('Error fetching services:', error);
            }
          };
          fetchServices();
    }, []);

    return (
        <div>
            <h1>our Services</h1>
            <ul>
                {services.map(service => (
                    <div key={service._id}>
                        <h4>Name: {service.name} </h4> 
                        <strong>Description:</strong> {service.duration}
                        <strong> ,Price:</strong> {service.price}
                        <strong> ,Duration:</strong> {service.duration}
                        <Link to={`/appointmentForm?serviceId=${service._id}`}>To קביעת תור</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Services;

