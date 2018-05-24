import { surveryMonkeyUrl } from '../../../constants'

export const sendRequestToSurveyMonkey = ({ emailAddress }) => {
  fetch(surveryMonkeyUrl, {
    emailAddress,
  })
}
