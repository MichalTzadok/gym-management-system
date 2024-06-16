// import { Request, Response } from 'express';
// import { ServiceModel, IService } from '../models/service.model';
// import { CustomError } from '../types/custonError';

// export const addService = async (req: Request) => {
//     const { name, price, business } = req.body;

//     if (!name || !price ) {
//         throw new CustomError('Missing required fields',400 );
//     }
//     const newService = new ServiceModel({
//         name,
//         price,
//         business,
//     });

//     try {
//        await newService.save();
//     } catch (error) {
//         console.error('Error saving service:', error);
//         throw new CustomError('Failed to save service',500);
//     }
// };

// export const updateService = async (req: Request) => {
//     const { id } = req.params;
//     const { name, price, businessId } = req.body;

//     try {
//         const updatedService = await ServiceModel.findByIdAndUpdate(
//             id,
//             { name, price, businessId },
//             { new: true, runValidators: true }
//         );

//         if (!updatedService) {
//             throw new CustomError('Service not found',404 );
//         }

//     } catch (error) {
//         console.error('Error updating service:', error);
//         throw new CustomError(  'Failed to update service' ,500);
//     }
// };

// export const deleteService = async (req: Request) => {
//     const { id } = req.params;

//     try {
//         const deletedService = await ServiceModel.findByIdAndDelete(id);

//         if (!deletedService) {
//             throw new CustomError('Service not found',404 );
//         }

//     } catch (error) {
//         console.error('Error deleting service:', error);
//         throw new CustomError( 'Failed to delete service',500);
//     }
// };

// export const getServices = async (req: Request) => {
//     try {
//         const services = await ServiceModel.find().populate('business');
//         return 

//     } catch (error) {
//         console.error('Error fetching services:', error);
//         throw new CustomError(  'Failed to fetch services',500);
//     }
// };

// export const getServiceById = async (req: Request) => {
//     const { id } = req.params;

//     try {
//         const service = await ServiceModel.findById(id).populate('business');

//         if (!service) {
//             throw new CustomError( 'Service not found' ,404);
//         }

//     } catch (error) {
//         console.error('Error fetching service:', error);
//         throw new CustomError( 'Failed to fetch service',500);
//     }
// };
