import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const Name = styled.h3`
  margin: 10px 0 0;
  font-size: 20px;
  color: #333;
`

const Specialization = styled.p`
  margin: 5px 0;
  color: #777;
  font-weight: 500;
`

const Status = styled.p`
  color: green;
  margin: 10px 0;
  font-weight: bold;
`

const BookButton = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`

function DoctorCard({ doctor }) {
  const navigate = useNavigate()

  const handleBookClick = (e) => {
    e.preventDefault()
    navigate(`/doctor/${doctor.id}`)
  }

  return (
    <Link to={`/doctor/${doctor.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card>
        <Image src={doctor.image} alt={doctor.name} />
        <Name>{doctor.name}</Name>
        <Specialization>{doctor.specialization}</Specialization>
        <Status>{doctor.status}</Status>
        <BookButton onClick={handleBookClick}>Book Appointment</BookButton>
      </Card>
    </Link>
  )
}

export default DoctorCard
