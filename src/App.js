import "./App.css";
import User from "./components/user";

function App() {
  const isUser = true;
  const name = "alex";
  const age = 30;
  const loginData = {
    loginName: "Alexander",
    email: "alex9185@gmail.com",
    password: "qwerty123456",
  };
  return (
    <>
      <User
        loginUser={isUser}
        userName={name}
        userAge={age}
        loginData={loginData}
      />
    </>
  );
}

export default App;
