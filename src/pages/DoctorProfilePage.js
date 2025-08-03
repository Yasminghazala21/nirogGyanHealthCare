import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import doctors from "../data/doctors"
import { useNavigate } from "react-router-dom"

const PageWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const DoctorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`

const Info = styled.div``

const Name = styled.h2`
  margin: 0;
  color: #222;
`

const Specialization = styled.p`
  color: #666;
  margin: 4px 0;
`

const Status = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 5px;
`

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Label = styled.label`
  font-weight: 500;
`

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`

const Select = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #005fa3;
  }
`

function DoctorProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState(null)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("10:00")

  useEffect(() => {
    const found = doctors.find((doc) => doc.id === id)
    setDoctor(found)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Appointment confirmed with ${doctor.name} on ${date} at ${time}`)
    navigate("/")
  }

  if (!doctor) return <p>Loading doctor info...</p>

  return (
    <PageWrapper>
      <ProfileHeader>
        <DoctorImage src={doctor.image} alt={doctor.name} />
        <Info>
          <Name>{doctor.name}</Name>
          <Specialization>{doctor.specialization}</Specialization>
          <Status>{doctor.status}</Status>
        </Info>
      </ProfileHeader>

      <Form onSubmit={handleSubmit}>
        <Label>Select Date</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <Label>Select Time Slot</Label>
        <Select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="10:00">10:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="17:00">5:00 PM</option>
        </Select>

        <Button type="submit">Confirm Appointment</Button>
      </Form>
    </PageWrapper>
  )
}

export default DoctorProfilePage
