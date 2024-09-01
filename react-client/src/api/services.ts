import axiosInstance from './axiosInstance';
import { Service, NewService } from '../interfaces/Service';

export const createService = async (data: NewService): Promise<Service> => {
  try {
    const response = await axiosInstance.post('/services', data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating service', error);
    throw error;
  }
};

export const getServices = async (): Promise<Service[]> => {
  const response = await axiosInstance.get<Service[]>('/services');
  return response.data;
};


export const deleteService = async (serviceId: string): Promise<void> => {
  await axiosInstance.delete(`/services/${serviceId}`);
};

export const updateService = async (serviceId: string, updatedServiceData: Partial<Service>): Promise<Service> => {
  const response = await axiosInstance.put<Service>(`/services/${serviceId}`, updatedServiceData);
  return response.data;
};
