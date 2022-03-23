export const errorToString = (err: unknown) =>
  (err instanceof Error ? err : new Error("An Exception Has Happened!"))
    .message;
