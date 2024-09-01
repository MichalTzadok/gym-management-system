import axiosInstance from './axiosInstance';
import { Meeting, NewMeeting, MeetingResponse } from '../interfaces/Meeting';

export const createMeeting = async (data: NewMeeting): Promise<Meeting> => {
  try {
    const response = await axiosInstance.post<MeetingResponse>('/meetings', data);
    return response.data.data;
  } catch (error) {
    console.error('Error creating meeting', error);
    throw error;
  }
};

export const getMeetings = async (): Promise<Meeting[]> => {
  try {
    const response = await axiosInstance.get<Meeting[]>('/meetings');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching meetings', error);
    throw error;
  }
};

export const getMeeting = async (meetingId: string): Promise<Meeting> => {
  const response = await axiosInstance.get<Meeting>(`/meetings/${meetingId}`);
  return response.data;
};

export const getUserMeetings = async (userId: string): Promise<Meeting[]> => {
  try {
    const response = await axiosInstance.get<Meeting[]>(`/meetings/user/${userId}`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching user meetings', error);
    return [];
  }
};

export const deleteMeeting = async (meetingId: string): Promise<void> => {
  await axiosInstance.delete(`/meetings/${meetingId}`);
};

export const updateMeeting = async (meetingId: string, updatedMeetingData: Partial<Meeting>): Promise<Meeting> => {
  const response = await axiosInstance.put<Meeting>(`/meetings/${meetingId}`, updatedMeetingData);
  return response.data;
};
