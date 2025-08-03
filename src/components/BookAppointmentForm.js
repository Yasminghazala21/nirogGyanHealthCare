import React, { useState } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
`

const Field = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  background-color: #2b72f0;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
`

const BookAppointmentForm = ({ doctor }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Appointment booked with Dr. ${doctor.name} on ${date} for ${name}`)
    setName('')
    setDate('')
  }

  return (
    <FormWrapper>
      <h2>Book Appointment with Dr. {doctor.name}</h2>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label>Your Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </Field>
        <Field>
          <Label>Appointment Date</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Field>
        <Button type="submit">Book Now</Button>
      </form>
    </FormWrapper>
  )
}

export default BookAppointmentForm
