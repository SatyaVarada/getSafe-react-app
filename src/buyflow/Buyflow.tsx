import React, { useState } from 'react'
import { ProductIds } from '../utilities/enums'
import {
  EMAIL,
  AGE,
  NAME,
  SUMMARY,
  PRODUCT_IDS_TO_NAMES,
  PRODUCT_FLOW,
  BUY_DESCRIPTION,
} from '../utilities/constants'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState(0)
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: '',
  })

  const getStepCallback = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(currentStep + 1)
  }

  const displayStep = () => {
    switch (PRODUCT_FLOW[props.productId][currentStep]) {
      case AGE:
        return <AgeStep callBack={getStepCallback} />
      case EMAIL:
        return <EmailStep callBack={getStepCallback} />
      case NAME:
        return <NameStep callBack={getStepCallback} />
      case SUMMARY:
        return (
          <SummaryStep
            productId={props.productId}
            collectedData={collectedData}
          />
        )
    }
  }

  return (
    <>
      <h4>{BUY_DESCRIPTION + ' ' + PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {displayStep()}
    </>
  )
}

export default Buyflow
