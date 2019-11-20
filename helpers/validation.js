export const nameValid = (name) => {
  if (name.length < 2) {
    return 'Name is too short';
  } else if (name.length >= 25) {
    return 'Name is too long';
  }

  return null;
};

export const emailValid = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length == 0) {
    return 'Please enter your email'
  } else if (!emailRegex.test(email)) {
    return 'Please check your email address';
  }

  return null;
}
