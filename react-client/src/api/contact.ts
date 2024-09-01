import axiosInstance from './axiosInstance';
import {  Message} from "../interfaces/Message";

export const sendMessage = async (message: Message): Promise<void> => {
  await axiosInstance.post('/contact', message);
};
