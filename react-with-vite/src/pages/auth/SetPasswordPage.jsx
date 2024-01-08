import PasswordSetComponent from "../../components/auth/PasswordSetComponent";

const SetPasswordPage = () => {
    const submitEvent = (data) => {
        console.log(data)
    }
  return (
    <>
    <div className="mainWrapper">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12">
                <PasswordSetComponent submitEvent={submitEvent} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetPasswordPage;