import React, { useEffect, useState } from 'react';
import { getUserMeetings, createMeeting } from '../../api/meetings';
import { Meeting, NewMeeting } from '../../interfaces/Meeting';
import { useAuth } from '../../contexts/AuthContext';

const UserMeetings = () => {
  const { auth } = useAuth();
  const userId = auth?._id;
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [newMeeting, setNewMeeting] = useState<NewMeeting>({
    userId: userId || '',
    details: '',
    serviceId: '',
    date: '',
    startTime: '',
    duration: '0',
  });

  useEffect(() => {
    if (userId) {
      const fetchMeetings = async () => {
        try {
          const fetchedMeetings = await getUserMeetings(userId);
          setMeetings(fetchedMeetings);
        } catch (error) {
          console.error('Error fetching meetings:', error);
        }
      };

      fetchMeetings();
    }
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMeeting({ ...newMeeting, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(userId);
      
      const createdMeeting = await createMeeting(newMeeting);
      setMeetings([...meetings, createdMeeting]);
      setNewMeeting({ ...newMeeting, details: '', serviceId: '', date: '', startTime: '', duration: '0' });
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  return (
    <div>
      <h2>הפגישות שלי</h2>
      <ul>
        {meetings.length > 0 ? (
          meetings.map((meeting) => {
            if (!meeting.startTime || !meeting.duration) {
              console.warn('Meeting data is incomplete:', meeting);
              return null;
            }
            
            const startDate = new Date(meeting.startTime); // השתמש ב-startTime לצורך התחלה
            const durationInMinutes = parseInt(meeting.duration, 10); // המרת ה-duration למספר
            const endDate = new Date(startDate.getTime() + durationInMinutes * 60000); // חישוב מועד הסיום
            return (
              <li key={meeting._id}>
                {meeting.details} - מתחילה: {startDate.toLocaleString()} - נמשכת: {durationInMinutes} דקות - מסתיימת: {endDate.toLocaleString()}
              </li>
            );
          })
        ) : (
          <p>אין פגישות זמינות.</p>
        )}
      </ul>

      <h3>הוסף פגישה חדשה</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>פרטים:</label>
          <input type="text" name="details" value={newMeeting.details} onChange={handleInputChange} required />
        </div>
        <div>
          <label>שירות:</label>
          <input type="text" name="serviceId" value={newMeeting.serviceId} onChange={handleInputChange} required />
        </div>
        <div>
          <label>תאריך:</label>
          <input type="date" name="date" value={newMeeting.date} onChange={handleInputChange} required />
        </div>
        <div>
          <label>שעה התחלה:</label>
          <input type="time" name="startTime" value={newMeeting.startTime} onChange={handleInputChange} required />
        </div>
        <div>
          <label>משך זמן (בדקות):</label>
          <input type="text" name="duration" value={newMeeting.duration} onChange={handleInputChange} required />
        </div>
        <button type="submit">הוסף פגישה</button>
      </form>
    </div>
  );
};

export default UserMeetings;
