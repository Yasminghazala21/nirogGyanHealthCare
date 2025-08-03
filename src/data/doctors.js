const doctors = [
  {
    id: "doc1",
    name: "Dr. Ayesha Khan",
    specialization: "Dermatologist",
    image: "/assets/doctor1.jpg",
    status: "Available Today",
    schedule: {
      Monday: "10:00 AM - 1:00 PM",
      Tuesday: "On Leave",
      Wednesday: "2:00 PM - 5:00 PM",
      Thursday: "10:00 AM - 1:00 PM",
      Friday: "2:00 PM - 5:00 PM",
      Saturday: "10:00 AM - 1:00 PM",
      Sunday: "Closed"
    }
  },
  {
    id: "doc2",
    name: "Dr. Zaid Ansari",
    specialization: "Cardiologist",
    image: "/assets/doctor2.jpg",
    status: "On Leave",
    schedule: {
      Monday: "On Leave",
      Tuesday: "2:00 PM - 6:00 PM",
      Wednesday: "2:00 PM - 6:00 PM",
      Thursday: "On Leave",
      Friday: "2:00 PM - 6:00 PM",
      Saturday: "10:00 AM - 12:00 PM",
      Sunday: "Closed"
    }
  }
]

export default doctors
