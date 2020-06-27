const authKeyword = 'Basic';

/**
 * Encodes username and password into a base64 encoded string
 * @param {String} username
 * @param {String} password
 */
const encode = (username, password) => {
  const encodedCredentials = Buffer
    .from(`${username}:${password}`, 'binary')
    .toString('base64');

  return `${authKeyword} ${encodedCredentials}`;
};

/**
 * Decodes a base64 string into a username and password
 * @param {String} encoded
 */
const decode = (encoded) => {
  const [keyword, encodedCredentials] = encoded.split(' ');

  if (keyword !== authKeyword) {
    return null;
  }

  const [username, password] = Buffer
    .from(encodedCredentials, 'base64')
    .toString('binary')
    .split(':');

  return { username, password };
};

export default {
  encode,
  decode,
};
