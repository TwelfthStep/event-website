
/**
 * Validate that a string is a valid email address.
 * @param email Email address string to validate.
 * @returns True if the address is valid, false if it is invalid.
 */
export function validateEmail(email?: string) {
  if(!email){
    return false;
  }
  
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}