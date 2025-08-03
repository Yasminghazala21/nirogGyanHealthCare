import React, { useState, useEffect } from "react"
import doctors from "../data/doctors"
import DoctorCard from "../components/DoctorCard"
import styled from "styled-components"

const PageWrapper = styled.div`
  padding: 40px;
  background: #f9f9f9;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const SearchInput = styled.input`
  padding: 12px 16px;
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`

function LandingPage() {
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(doctors)

  useEffect(() => {
    const results = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
    )
    setFiltered(results)
  }, [search])

  return (
    <PageWrapper>
      <SearchInput
        type="text"
        placeholder="Search doctor by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid>
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </Grid>
    </PageWrapper>
  )
}

export default LandingPage
