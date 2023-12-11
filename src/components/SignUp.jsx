import { Fragment } from "react"
import TextInput from "./ui/TextInput/TextInput"

function SignUp({ formHeading, formInfo }) {
  return (
    <div className="signUp">
      <div className="signUp__text">
        <h1 className="signUp__title">{formHeading.split('\n').map((line, index) => <Fragment key={index}>{line}<br /></Fragment>)}</h1>
      </div>

      <div className="signUp__input">
        <TextInput />
      </div>

      <div className="signUp__info">
        <p className="signUp__subtitle">{formInfo}</p>
      </div>
    </div>
  )
}

export default SignUp