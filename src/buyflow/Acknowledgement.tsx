import React from 'react'
import { Link } from 'react-router-dom'
import {
  ACKNOWLEDGEMENT_HOME_REDIRECT,
  ACKNOWLEDGEMENT_THANKS,
  PRODUCT_IDS_TO_NAMES,
} from '../utilities/constants'
import { ProductIds } from '../utilities/enums'

interface AcknowledgementProps {
  productId: ProductIds
}

const Acknowledgement: React.FC<AcknowledgementProps> = (props) => {
  return (
    <>
      <p>
        {ACKNOWLEDGEMENT_THANKS + ' '}
        <b>{PRODUCT_IDS_TO_NAMES[props.productId]}</b>!
        <br />
        {ACKNOWLEDGEMENT_HOME_REDIRECT + ' '}
        <Link to={'/'}>Home page</Link>
      </p>
    </>
  )
}

export default Acknowledgement
