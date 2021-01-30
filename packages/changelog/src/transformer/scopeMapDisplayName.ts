export const scopeMapDisplayName = (
  scope: string,
  scopeDisplayNameList: Record<string, string>,
) => {
  const entries = Object.entries(scopeDisplayNameList);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    if (scope === key) {
      return value;
    }

    // 如果没有 scope 的情况下 且有通配符
    // 那么直接使用通配符的值
    if (!scope && scopeDisplayNameList['*']) {
      return scopeDisplayNameList['*'];
    }
  }
  // 其余情况返回原值
  return scope;
};
