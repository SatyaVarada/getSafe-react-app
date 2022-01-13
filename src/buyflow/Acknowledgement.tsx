import React from 'react'
import { Link } from 'react-router-dom'

interface AcknowledgementProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  designIns = 'design_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designIns]: 'Designer Insurance',
}

const Acknowledgement: React.FC<AcknowledgementProps> = (props) => {
  return (
    <>
      <p>
        Thank you for purchasing the{' '}
        <b>{PRODUCT_IDS_TO_NAMES[props.productId]}</b>!
        <br />
        To purchase another product, please visit our{' '}
        <Link to={'/'}>Home page</Link>
      </p>
    </>
  )
}

export default Acknowledgement
