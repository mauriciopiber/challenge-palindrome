/**
 * Check if a string is a palindrome
 *
 * @param str
 * @returns boolean
 */
export default function isPalindromeString(str: string): boolean {
  return str === str.split("").reverse().join("");
}
