import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
// import HookForm from "./components/HookForm/HookForm";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm"
// import RefForm from './components/StatefulForm/RefFrom/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   // e.preventDefault();
  //   console.log('sign up data' , data);
  // };
  // const handleUpdateProfile = (data) => {
  //   // e.preventDefault();
  //   console.log('update profile' , data);
  // };

  return (
    <>
      <h1>Form Master</h1>

      <GrandPa></GrandPa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign up</h2>
          <p>please sign up right now ..</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText={"Update"}
      >
        <div>
          <h2>Update Your Profile</h2>
          <p>Please update...</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
