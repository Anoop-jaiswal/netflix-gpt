export const validate = (email, password, name) => {
  const emailValidate = email
    ? /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    : true;
  const passwordValidate = password
    ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    : true;
  const nameValidate = name ? /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name) : true;

  if (email && !emailValidate) return "Email is not valid";
  if (password && !passwordValidate) return "Password is not valid";
  if (name && !nameValidate) return "Name is not valid";

  return null;
};
