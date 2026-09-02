export function getAccessCode() {
  return process.env.PERSONAL_ACCESS_CODE ?? ''
}

export function isValidAccessCode(code: string) {
  const expected = getAccessCode()
  return Boolean(expected) && code.trim() === expected
}