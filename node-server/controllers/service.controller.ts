// import { Response, Request } from 'express';
// import { addService } from "../services/service.service";

// export const addService_s = async (req: Request, res: Response) => {
//     try {
//         const result = await addService(req);
//         console.log(result);
//         return res.status(201).send('Service added successfully');
//     } catch (error) {
//         let status = 500;
//         let message = '';
//         if (error instanceof Error ) {
//             if (error.message === 'Missing required fields') {
//                 message = 'Missing required fields';
//                 status = 400;
//             }
//             if (error.message === 'Failed to save service') {
//                 message = 'Failed to save service';
//                 status = 500;
//             }
//         }

//         console.error('Error during add service:', message);
//         return res.status(status).json({ message: 'An error occurred during add service'+message });
//     }
// };
