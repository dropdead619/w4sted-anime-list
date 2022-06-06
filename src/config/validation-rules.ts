export const required = (value: string) => {
  const requiredMessage = 'This field is required';
  if (value === undefined || value === null)
    return requiredMessage;

  if (!String(value).length)
    return requiredMessage;

  return true;
};

export const email = (value: string) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!regex.test(String(value).toLocaleLowerCase()))
    return 'Please enter valid email address!';

  return true;
};

export const anything = () => {
  return true;
};
