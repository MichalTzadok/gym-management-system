import React, { useEffect, useState } from 'react';
import { createMeeting } from '../../api/meetings';
import { getServices } from '../../api/services';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Service } from '../../interfaces/Service';
import { NewMeeting } from '../../interfaces/Meeting';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().substring(0, 10));
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [appointmentMessage, setAppointmentMessage] = useState<string>('');
  const [noteToBusiness, setNoteToBusiness] = useState<string>('');
  const [services, setServices] = useState<Service[]>([]);
  const { auth } = useAuth();
  const userId = auth?._id;
  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        if (servicesData && Array.isArray(servicesData.services)) {
          setServices(servicesData.services);
        } else {
          console.error('Unexpected data format:', servicesData);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
    
    const queryParams = new URLSearchParams(location.search);
    const serviceId = queryParams.get('serviceId');
    if (serviceId) {
      setSelectedService(serviceId);
    }
  }, [location.search]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId || !selectedService || !selectedDate || !selectedTime) {
      setAppointmentMessage('כל השדות נדרשים.');
      return;
    }

    const dateTime = new Date(`${selectedDate}T${selectedTime}`).toISOString();

    if (isNaN(Date.parse(dateTime))) {
      setAppointmentMessage('תאריך או שעה לא תקינים.');
      return;
    }

    const data: NewMeeting = {
      userId,
      details: noteToBusiness,
      serviceId: selectedService,
      dateTime,  // השדה החדש שהוסף
      duration: '60', // ברירת מחדל או להתאים לפי הצורך
    };

    try {
      const response = await createMeeting(data);
      if (response.status === 201) {
        setAppointmentMessage(response.message || `התור נקבע בהצלחה לתאריך ${new Date(dateTime).toLocaleString()}.`);
      } else {
        setAppointmentMessage('נכשל בקביעת התור.');
      }
    } catch (error) {
      console.error('שגיאה בקביעת התור:', error);
      setAppointmentMessage('שגיאה בקביעת התור.');
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteToBusiness(event.target.value);
  };

  return (
    <div>
      <form className="custom-form" onSubmit={handleSubmit}>
        <label>תאריך:</label>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <br />

        <label>שעה:</label>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
        <br />

        <label>שירות:</label>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">בחר שירות</option>
          {services.map(service => (
            <option key={service._id} value={service._id}>{service.name}</option>
          ))}
        </select>
        <br />

        <label>הערה לבעל העסק:</label>
        <textarea
          value={noteToBusiness}
          onChange={handleNoteChange}
          placeholder="הזן הערה כאן"
        />
        <br />

        <button type="submit">קבע תור</button>
        <p>{appointmentMessage}</p>
      </form>
      <button><Link to={'/services'}>חזור</Link></button>
    </div>
  );
};

export default AppointmentForm;
