export default function validateForm({name, email, password, confirmPass}) {
  if (!name.trim()) {
    return 'שם המבקש אינו יכול להיות ריק';
  }
  // else if (!/^[A-Za-z]+/.test(name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return 'נדרש אימייל';
  } else if (regex.test(email.toLocalLowerCase)) {
    return 'אימייל לא תקין';
  }
  if (!password) {
    return 'Password is required';
  } else if (password.length < 6) {
    return 'Password needs to be 6 characters or more';
  }

  if (!confirmPass) {
    return 'Enter Confirm password is required';
  } else if (confirmPass !== password) {
    return 'Passwords do not match';
  }
  return null;
}
