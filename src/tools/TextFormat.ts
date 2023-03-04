/**
 * Capitalize the first letter of a string.
 * @param string The string to capitalize.
 * @returns The capitalized string. For example: 'hello there friend' -> 'Hello there friend'.
 */
export function capitalize(string: string){
  return (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}

/**
 * Capitalize every word in a string.
 * @param string The string to capitalize every first letter of.
 * @returns The string with every word capitalized. For example: 'hello there friend' -> 'Hello There Friend'.
 */
export function capitalizeAllWords(string: string) {
  let newString = '';
  let pieces = string.split(' ');

  for(let i in pieces){
    newString += `${capitalize(pieces[i])} `;
  }

  return newString.substring(0, newString.length - 1);
}