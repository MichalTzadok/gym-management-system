import { useState, useEffect } from 'react';
import { createService ,getServices,deleteService,updateService} from '../../api/services'; 
import { Service, NewService } from "../../interfaces/Service";

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<NewService>({ name: '', description: '', price: 0, duration: '', businessId: '' });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [updatedService, setUpdatedService] = useState<Partial<Service>>({});

  useEffect(() => {
    fetchServices();
  }, []);

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
  const handleCreateService = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const createdService = await createService(newService);
      console.log('Service created successfully:', createdService);
      setServices([...services, createdService]);
      setNewService({ name: '', description: '', price: 0, duration: '', businessId: '' });
      fetchServices();
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      await deleteService(serviceId);
      console.log('Service deleted successfully');
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setUpdatedService(service);
  };

  const handleUpdateService = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedService || !selectedService._id) return;

    try {
      const updatedServiceData = await updateService(selectedService._id, updatedService);
      console.log('Service updated successfully:', updatedServiceData);
      console.log(updatedService);
      
      setServices(services.map(service => (service._id === selectedService._id ? updatedServiceData : service)));
      setSelectedService(null);
      setUpdatedService({});
      fetchServices();
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };
  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            name: {service.name} ,description: {service.description}, price: ${service.price}, duration: {service.duration}  
            <br></br>
            <button onClick={() => handleDeleteService(service._id)}>Delete</button>
            <button onClick={() => handleSelectService(service)}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateService}>
        <input
          type="text"
          value={newService.name}
          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          placeholder="Service name"
          required
        />
        <input
          type="text"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          placeholder="Service description"
          required
        />
        <input
          type="number"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
          placeholder="Service price"
          required
        />
        <input
          type="text"
          value={newService.duration}
          onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
          placeholder="Service duration"
          required
        />
        <input
          type="text"
          value={newService.businessId}
          onChange={(e) => setNewService({ ...newService, businessId: e.target.value })}
          placeholder="Business ID"
          required
        />
        <button type="submit">Create Service</button>
      </form>

      {selectedService && (
        <form onSubmit={handleUpdateService}>
          <h2>Update Service</h2>
          <input
            type="text"
            value={updatedService.name ?? ''}
            onChange={(e) => setUpdatedService({ ...updatedService, name: e.target.value })}
            placeholder="Service name"
            required
          />
          <input
            type="text"
            value={updatedService.description ?? ''}
            onChange={(e) => setUpdatedService({ ...updatedService, description: e.target.value })}
            placeholder="Service description"
            required
          />
          <input
            type="number"
            value={updatedService.price ?? 0}
            onChange={(e) => setUpdatedService({ ...updatedService, price: Number(e.target.value) })}
            placeholder="Service price"
            required
          />
          <input
            type="text"
            value={updatedService.duration ?? ''}
            onChange={(e) => setUpdatedService({ ...updatedService, duration: e.target.value })}
            placeholder="Service duration"
            required
          />
          <input
            type="text"
            value={updatedService.businessId ?? ''}
            onChange={(e) => setUpdatedService({ ...updatedService, businessId: e.target.value })}
            placeholder="Business ID"
            required
          />
          <button type="submit">Update Service</button>
        </form>
      )}
    </div>
  );
};

export default Services;