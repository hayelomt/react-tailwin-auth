export const logger = (...data: any[]) => {
  console.log(`:>`, ...data);
};

export const logError = (data: string, err: Error | null = null) => {
  console.error('=>', data, err ? err.message : '', err);
};
