import * as input from './getInputs'

export function getPrSignComment() {
  return (
    input.getCustomPrSignComment() ||
    'I have read the CLC Document and I hereby sign the CLC'
  )
}
