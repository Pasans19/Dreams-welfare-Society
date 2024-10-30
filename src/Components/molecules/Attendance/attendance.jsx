import React, { useState } from 'react';
import './attendance.css'

const AttendanceSheet = () => {
    const [attendance, setAttendance] = useState([]);
    const [formData, setFormData] = useState({
        memberName: '',
        status: 'Present',
        arrivalTime: '',
        letter: 'Yes'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const now = new Date();
        const date = now.toISOString().split('T')[0];

        const { memberName, status, arrivalTime, letter } = formData;

        const [hours, minutes] = arrivalTime.split(':').map(Number);
        const arrivalDateTime = new Date();
        arrivalDateTime.setHours(hours, minutes, 0, 0);

        const fineThresholdTime = new Date();
        fineThresholdTime.setHours(19, 30, 0, 0); // 7:30 PM

        let fine = 0;

        if (status === "Absent" && letter === "No") {
            fine = 100;
        } else if (status !== "Present" || arrivalDateTime > fineThresholdTime) {
            fine = 50;
        }

        const newAttendance = {
            date,
            arrivalTime,
            memberName,
            status,
            fine
        };

        setAttendance([...attendance, newAttendance]);

        setFormData({
            memberName: '',
            status: 'Present',
            arrivalTime: '',
            letter: 'Yes'
        });
    };

    return (
        <div className="container">
            <h1>Society Attendance Sheet</h1>

            <form id="attendanceForm" onSubmit={handleSubmit}>
                <label htmlFor="memberName">Member Name:</label>
                <input
                    type="text"
                    id="memberName"
                    value={formData.memberName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                </select>

                <label htmlFor="arrivalTime">Arrival Time:</label>
                <input
                    type="time"
                    id="arrivalTime"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="letter">Letter Provided:</label>
                <select
                    id="letter"
                    value={formData.letter}
                    onChange={handleChange}
                    required
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <button type="submit">Add Attendance</button>
            </form>

            <table id="attendanceTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Member Name</th>
                        <th>Status</th>
                        <th>Fine (LKR)</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.arrivalTime}</td>
                            <td>{entry.memberName}</td>
                            <td>{entry.status}</td>
                            <td>{entry.fine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceSheet;
