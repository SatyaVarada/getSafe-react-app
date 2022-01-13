import React, { useState } from 'react'
import { EMAIL, AGE, NAME, SUMMARY } from '../utilities/constants'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
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

// const PRODUCT_FLOW = {
//   [ProductIds.devIns]: [EMAIL, AGE, SUMMARY],
//   [ProductIds.designIns]: [EMAIL, AGE, NAME, SUMMARY]
// };

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: '',
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === EMAIL && <EmailStep cb={getStepCallback(AGE)} />) ||
        (currentStep === AGE && (
          <AgeStep
            cb={
              props.productId === 'dev_ins'
                ? getStepCallback(SUMMARY)
                : getStepCallback(NAME)
            }
          />
        )) ||
        (currentStep === NAME && <NameStep cb={getStepCallback(SUMMARY)} />) ||
        (currentStep === SUMMARY && (
          <SummaryStep
            productId={props.productId}
            collectedData={collectedData}
          />
        ))}
    </>
  )
}

export default Buyflow
