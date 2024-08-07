
import { Request } from 'express';
import { CustomError } from "../types/customError";
import { ServiceModel } from '../models/service.model';
import { BusinessModel } from '../models/business.model';

export const createService = async (req: Request) => {
    const { name,description, price,duration, businessId } = req.body;
    if (!name ||!description|| !price || !duration )
        throw new CustomError('Missing required fields', 400);
    const isBusinessIdValid = await BusinessModel.findById(businessId);
    if (!isBusinessIdValid) 
        throw new CustomError('Invalid businessId', 422);
    const newService = new ServiceModel({
        name: name,
        description:description,
        price: price,
        duration:duration,
        businessId: businessId,
    });
    try {
        await newService.save();
    } catch (error) {
        console.error('Error saving service:', error);
        throw new CustomError('Failed to save service', 500);
    }
    return newService;
};

export const updateService = async (req: Request) => {
    const { serviceId } = req.params; 
    const {  name,description, price,duration, businessId } = req.body;
    if (!serviceId  || !name ||!description || !price|| !duration || !businessId) 
        throw new CustomError('Missing required fields', 400);
    const isBusinessIdValid = await BusinessModel.findById(businessId);
    if (!isBusinessIdValid) 
        throw new CustomError('Invalid businessId', 422);
    try {
        const serviceToUpdate = await ServiceModel.findByIdAndUpdate(serviceId  , { name,description, price,duration, businessId }, { new: true });
        if (!serviceToUpdate) {
            throw new CustomError('Service not found', 404);
        }
        return serviceToUpdate;
    } catch (error) {
        console.error('Error updating service:', error);
        throw new CustomError('Failed to update service', 500);
    }
};



export const deleteService = async (req: Request) => {
    const { serviceId } = req.params;
    const service = await ServiceModel.findById(serviceId);
    if (!service) {
        throw new CustomError('Service not found', 404);
    }
    try {
        const deletedService = await ServiceModel.findByIdAndDelete(serviceId);
        return deletedService;
    } catch (error) {
        console.error('Error deleting service:', error);
        throw new CustomError('Failed to delete service', 500);
    }
};

export const getServices = async () => {
        const services = await ServiceModel.find();
        return services;
};

export const getService = async (req: Request) => {
        const { serviceId } = req.params;
        const service = await ServiceModel.findById(serviceId);
        if (!service) {
            throw new CustomError('Service not found', 404);
        }
        return service;
};