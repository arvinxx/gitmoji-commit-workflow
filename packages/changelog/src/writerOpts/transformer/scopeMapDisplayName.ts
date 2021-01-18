export const scopeMapDisplayName = (
  scope: string,
  scopeDisplayNameList: Record<string, string>,
) => {
  const entries = Object.entries(scopeDisplayNameList);
  for (const [key, value] of entries) {
    if (scope === key) {
      return value;
    }
  }
};
