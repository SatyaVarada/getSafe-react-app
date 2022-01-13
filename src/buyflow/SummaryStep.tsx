import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name: string
  }
  productId: string
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {props.productId === 'design_ins' && (
        <div>Name: {props.collectedData.name}</div>
      )}
      <div>
        <Link to={'/purchased=' + props.productId}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
