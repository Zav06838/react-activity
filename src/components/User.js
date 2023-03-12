import "./color.css";

const User = (props) => {
  const {
    username,
    firstName,
    lastName,
    school,
    email,
    profilePicture,
    classLevel,
  } = props.user;

  return (
    <div>
      <h3>{username}</h3>
      <img src={profilePicture} alt={`${firstName} ${lastName}`} />
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>School: {school}</p>
      <p>Email: {email}</p>
      <p>
        Class level:{" "}
        <span className={classLevel === "Freshmen" ? "green" : "black"}>
          {classLevel}
        </span>
      </p>

      <hr />
    </div>
  );
};

export default User;
