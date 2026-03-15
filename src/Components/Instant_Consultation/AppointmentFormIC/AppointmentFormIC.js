import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      phoneNumber,
      appointmentDate,
      selectedSlot
    });

    setName('');
    setPhoneNumber('');
    setAppointmentDate('');
    setSelectedSlot('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">

      {/* Name */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      {/* Appointment Date */}
      <div className="form-group">
        <label htmlFor="date">Date of Appointment:</label>
        <input
          type="date"
          id="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>

      {/* Time Slot */}
      <div className="form-group">
        <label htmlFor="slot">Book Time Slot:</label>
        <select
          id="slot"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
        >
          <option value="">Select a time slot</option>
          <option value="9AM-10AM">9AM - 10AM</option>
          <option value="10AM-11AM">10AM - 11AM</option>
          <option value="11AM-12PM">11AM - 12PM</option>
          <option value="2PM-3PM">2PM - 3PM</option>
          <option value="3PM-4PM">3PM - 4PM</option>
        </select>
      </div>

      <button type="submit">Book Now</button>

    </form>
  );
};

export default AppointmentFormIC;