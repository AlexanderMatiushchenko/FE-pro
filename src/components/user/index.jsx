import Info from "../info";
function User(props) {
  const { loginUser, userName, userAge, loginData } = props;
  return (
    <>
      <Info
        loginUser={loginUser}
        userName={userName}
        userAge={userAge}
        loginData={loginData}
      />
    </>
  );
}
export default User;
