/**
 * Set a value into `localStorage`.
 */
export function set(key: string, value: any){
  localStorage.setItem(key, value);
}

/**
 * Get a value from `localStorage`.
 */
export function get(key: string){
  return localStorage.getItem(key);
}

/**
 * Parse a boolean from `localStorage`, if it exists. 
 * 
 * If it does not exist, `false` will be returned.
 */
export function getBool(key: string) {
  const value = get(key);
  if(!value){
    return false;
  }

  if(value === 'true'){
    return true;
  }
  else if(value === 'false'){
    return false;
  }

  console.warn(`Invalid value for localStorage item '${key}':`, value);

  return false;
}