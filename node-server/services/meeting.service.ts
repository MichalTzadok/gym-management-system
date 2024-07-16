import { Request } from 'express';
import { CustomError } from "../types/customError";
import { MeetingModel } from '../models/meeting.model';
import { BusinessModel } from '../models/business.model';
import { UserModel } from '../models/user.model';
import { ServiceModel } from '../models/service.model';
import { checkOverlap } from '../utils/overlappingMeetingValidator';

export const createMeeting = async (req: Request) => {
    const { userId, details, serviceId, dateTime, duration } = req.body;
    if (!userId || !details || !serviceId || !dateTime || !duration) {
        throw new CustomError('Missing required fields', 400);
    }

    const isUserIdValid = await UserModel.findById(userId);
    if (!isUserIdValid) {
        throw new CustomError('Invalid userId', 422);
    }

    const isServiceIdValid = await ServiceModel.findById(serviceId);
    if (!isServiceIdValid) {
        throw new CustomError('Invalid serviceId', 422);
    }

    const date_time = new Date(dateTime);
    const isOverlap = await checkOverlap(date_time, duration);
    if (isOverlap) {
        throw new CustomError('Overlap with existing meeting', 409);
    }

    const newMeeting = new MeetingModel({
        userId: userId,
        details: details,
        serviceId: serviceId,
        dateTime: dateTime,
        duration: duration,
    });
    try {
        await newMeeting.save();
        return newMeeting;
    } catch (error) {
        console.error('Error saving meeting:', error);
        throw new CustomError('Failed to save meeting', 500);
    }
};

export const updateMeeting = async (req: Request) => {
    const { meetingId } = req.params; 
    const {  userId, details, serviceId, dateTime, duration } = req.body;
    if (!meetingId || !userId || !details || !serviceId  || !dateTime ||  !duration)
        throw new CustomError('Missing required fields', 400);
    const isUserIdValid = await UserModel.findById(userId);
    if (!isUserIdValid)
        throw new CustomError('Invalid userId', 422);

    const isServiceIdValid = await ServiceModel.findById(serviceId);
    if (!isServiceIdValid)
        throw new CustomError('Invalid serviceId', 422);

    const date_time = new Date(dateTime);
    const isOverlap = await checkOverlap(date_time, duration ,meetingId);
    if (isOverlap) {
        throw new CustomError('Overlap with existing meeting', 409);
    }
    try {
        const meetingToUpdate = await MeetingModel.findByIdAndUpdate(meetingId, { userId, details, serviceId, dateTime , duration }, { new: true });
        if (!meetingToUpdate) {
            throw new CustomError('Meeting not found', 404);
        }

        return meetingToUpdate;
    } catch (error) {
        console.error('Error updating meeting:', error);
        throw new CustomError('Failed to update meeting', 500);
    }
};

export const deleteMeeting = async (req: Request) => {
    const { meetingId } = req.params;
    const meeting = await MeetingModel.findById(meetingId);
    if (!meeting) {
        throw new CustomError('Meeting not found', 404);
    }

    try {
        const deletedMeeting = await MeetingModel.findByIdAndDelete(meetingId);
        return deletedMeeting;
    } catch (error) {
        console.error('Error deleting meeting:', error);
        throw new CustomError('Failed to delete meeting', 500);
    }
};

export const getMeetings = async () => {
    const meetings = await MeetingModel.find();
    return meetings;
};

export const getMeeting = async (req: Request) => {
    const { meetingId } = req.params;
    const meeting = await MeetingModel.findById(meetingId);
    if (!meeting) {
        throw new CustomError('Meeting not found', 404);
    }

    return meeting;
};

export const getMeetingsByUserId = async (req: Request) => {
    const { userId } = req.params;
    if (!userId) {
        throw new CustomError('Missing userId parameter', 400);
    }

    const meetings = await MeetingModel.find({ userId });
    if (!meetings.length) {
        throw new CustomError('No meetings found for this userId', 404);
    }

    return meetings;
};