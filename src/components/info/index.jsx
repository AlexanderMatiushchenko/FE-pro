function Info(props) {
  const { userName, userAge, loginUser, loginData } = props;
  console.log(userName, userAge, loginUser, loginData);
  //   console.log(props);
  return (
    <div>
      <h1>{userName}</h1>
      <h2>{userAge}</h2>
      <h3>{loginData.loginName}</h3>
      <h3>{loginData.email}</h3>
      <h4>{loginData.password}</h4>
    </div>
  );
}
export default Info;
