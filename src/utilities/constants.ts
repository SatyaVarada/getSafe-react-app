import { ProductIds } from './enums'

export const EMAIL: string = 'email'
export const NAME: string = 'name'
export const AGE: string = 'age'
export const SUMMARY: string = 'summary'
export const DEV: string = 'development'
export const WELCOME_MESSAGE: string = 'Welcome to Getsafe. '
export const HOME_DESCRIPTION: string =
  'Get started with the insurance(s) of your choice!'
export const BUY_DESCRIPTION: string = 'Buying'
export const ACKNOWLEDGEMENT_THANKS: string = 'Thank you for purchasing the'
export const ACKNOWLEDGEMENT_HOME_REDIRECT: string =
  'To purchase another product, please visit our'

export const ERROR_MESSAGE_AGE: string = 'Enter a valid age between 1 and 150'
export const ERROR_MESSAGE_FIRST_NAME: string = 'Enter first name'
export const ERROR_MESSAGE_LAST_NAME: string = 'Enter last name'
export const ERROR_MESSAGE_EMAIL: string = 'Enter a valid email'

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designIns]: 'Designer Insurance',
}

export const PRODUCT_FLOW = {
  [ProductIds.devIns]: [EMAIL, AGE, SUMMARY],
  [ProductIds.designIns]: [EMAIL, AGE, NAME, SUMMARY],
}
