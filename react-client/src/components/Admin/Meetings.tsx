import { useState, useEffect } from 'react';
import { createMeeting, getUserMeetings, deleteMeeting, updateMeeting } from '../../api/meetings'; 
import { Meeting, NewMeeting } from "../../interfaces/Meeting";
import { useAuth } from '../../contexts/AuthContext'; // ייבוא ה-context של האותנטיקציה

const Meetings = () => {
  const { auth } = useAuth(); // קבלת פרטי המשתמש מה-context
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [newMeeting, setNewMeeting] = useState<NewMeeting>({ 
    userId: auth?._id || '', // שימוש ב-id של המשתמש הנוכחי
    details: '', 
    serviceId: '', 
    date: '', 
    startTime: '', 
    duration: '' 
  });
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [updatedMeeting, setUpdatedMeeting] = useState<Partial<Meeting>>({});

  useEffect(() => {
    if (auth) { // רק אם יש משתמש מחובר
      fetchMeetings(auth._id);
    }
  }, [auth]);

  const fetchMeetings = async (userId: string) => {
    try {
      const meetingsData = await getUserMeetings(userId);
      console.log(meetingsData);
      if (Array.isArray(meetingsData)) {
        setMeetings(meetingsData);
      } else {
        setMeetings([]);
        console.error('Unexpected data format:', meetingsData);
      }
    } catch (error) {
      setMeetings([]);
      console.error('Error fetching meetings:', error);
    }
  };

  const handleCreateMeeting = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const createdMeeting = await createMeeting(newMeeting);
      setMeetings([...meetings, createdMeeting]);
      setNewMeeting({ 
        userId: auth?._id || '', // שימוש ב-id של המשתמש הנוכחי
        details: '', 
        serviceId: '', 
        date: '', 
        startTime: '', 
        duration: '' 
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  const handleDeleteMeeting = async (meetingId: string) => {
    try {
      await deleteMeeting(meetingId);
      setMeetings(meetings.filter(meeting => meeting._id !== meetingId));
    } catch (error) {
      console.error('Error deleting meeting:', error);
    }
  };

  const handleSelectMeeting = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setUpdatedMeeting(meeting);
  };

  const handleUpdateMeeting = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedMeeting || !selectedMeeting._id) return;

    try {
      const updatedMeetingData = await updateMeeting(selectedMeeting._id, updatedMeeting);
      setMeetings(meetings.map(meeting => 
        (meeting._id === selectedMeeting._id ? updatedMeetingData : meeting)
      ));
      setSelectedMeeting(null);
      setUpdatedMeeting({});
    } catch (error) {
      console.error('Error updating meeting:', error);
    }
  };

  return (
    <div>
      <h1>Meetings</h1>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting._id}>
            Details: {meeting.details}, Date: {meeting.date}, Start Time: {meeting.startTime}, Duration: {meeting.duration}
            <br />
            <button onClick={() => handleDeleteMeeting(meeting._id)}>Delete</button>
            <button onClick={() => handleSelectMeeting(meeting)}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateMeeting}>
        <input
          type="text"
          value={newMeeting.userId}
          onChange={(e) => setNewMeeting({ ...newMeeting, userId: e.target.value })}
          placeholder="User ID"
          required
          readOnly // השדה יהיה קריא בלבד כדי למנוע שינוי ידני
        />
        <input
          type="text"
          value={newMeeting.details}
          onChange={(e) => setNewMeeting({ ...newMeeting, details: e.target.value })}
          placeholder="Details"
          required
        />
        <input
          type="text"
          value={newMeeting.serviceId}
          onChange={(e) => setNewMeeting({ ...newMeeting, serviceId: e.target.value })}
          placeholder="Service ID"
          required
        />
        <input
          type="date"
          value={newMeeting.date}
          onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
          required
        />
        <input
          type="time"
          value={newMeeting.startTime}
          onChange={(e) => setNewMeeting({ ...newMeeting, startTime: e.target.value })}
          required
        />
        <input
          type="text"
          value={newMeeting.duration}
          onChange={(e) => setNewMeeting({ ...newMeeting, duration: e.target.value })}
          placeholder="Duration"
          required
        />
        <button type="submit">Create Meeting</button>
      </form>

      {selectedMeeting && (
        <form onSubmit={handleUpdateMeeting}>
          <h2>Update Meeting</h2>
          <input
            type="text"
            value={updatedMeeting.userId ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, userId: e.target.value })}
            placeholder="User ID"
            required
            readOnly // השדה יהיה קריא בלבד כדי למנוע שינוי ידני
          />
          <input
            type="text"
            value={updatedMeeting.details ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, details: e.target.value })}
            placeholder="Details"
            required
          />
          <input
            type="text"
            value={updatedMeeting.serviceId ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, serviceId: e.target.value })}
            placeholder="Service ID"
            required
          />
          <input
            type="date"
            value={updatedMeeting.date ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={updatedMeeting.startTime ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, startTime: e.target.value })}
            required
          />
          <input
            type="text"
            value={updatedMeeting.duration ?? ''}
            onChange={(e) => setUpdatedMeeting({ ...updatedMeeting, duration: e.target.value })}
            placeholder="Duration"
            required
          />
          <button type="submit">Update Meeting</button>
        </form>
      )}
    </div>
  );
};

export default Meetings;
