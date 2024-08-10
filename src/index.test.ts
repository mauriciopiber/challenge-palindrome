import isPalindromeString from ".";

describe("Palindrome", () => {
  test("Works for palindrome words - Return true", () => {
    expect(isPalindromeString("anilina")).toBe(true);
    expect(isPalindromeString("ovo")).toBe(true);
    expect(isPalindromeString("osso")).toBe(true);
  });

  test("Works for not palindrome words - Return false", () => {
    expect(isPalindromeString("anilinaa")).toBe(false);
    expect(isPalindromeString("ovo1")).toBe(false);
    expect(isPalindromeString("osso1")).toBe(false);
  });
});
