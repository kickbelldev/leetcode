function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((acc, cur) => acc + (cur[1] === '+' ? 1 : -1), 0)
}