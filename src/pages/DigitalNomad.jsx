import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetDigitalNomadQuery } from '../services/DigitalNomadApi'

const DigitalNomad = () => {
  const { data, isLoading, error, isError } = useGetDigitalNomadQuery()
  

  if(isLoading) return 'Loading...' 

  console.log('Digital Nomad',data);
  
  return (
    <>
      <h2>Digital Nomad</h2>
    </>
  )
}

export default DigitalNomad