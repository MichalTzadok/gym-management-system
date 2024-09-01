export interface Meeting {
  _id: string;
  userId: string;
  details: string;
  serviceId: string;
  dateTime: string; // Updated field
  duration: string;
  status?: number;
  message?: string;
}

export interface NewMeeting {
  userId: string;
  details: string;
  serviceId: string;
  dateTime: string; // Updated field
  duration: string;
}

export interface MeetingResponse {
  status: number;
  message: string;
  data: Meeting;
}