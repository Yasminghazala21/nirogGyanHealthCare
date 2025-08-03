import React, { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import doctors from "../data/doctors"

const Wrapper = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Message = styled.p`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: green;
`

function BookAppointmentPage() {
  const { id } = useParams()
  const doctor = doctors.find((doc) => doc.id === id)

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: "", email: "", date: "", time: "" })
  }

  if (!doctor) {
    return <Wrapper>Doctor not found.</Wrapper>
  }

  return (
    <Wrapper>
      <Heading>Book Appointment with {doctor.name}</Heading>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Patient Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="date">Preferred Date:</Label>
        <Input
          type="date"
          name="date"
          id="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <Label htmlFor="time">Preferred Time:</Label>
        <Input
          type="time"
          name="time"
          id="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <Button type="submit">Confirm Appointment</Button>
      </form>

      {submitted && (
        <Message>Your appointment has been booked successfully!</Message>
      )}
    </Wrapper>
  )
}

export default BookAppointmentPage
