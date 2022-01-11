export interface ICaughtError {
  response: { status: number; message: string };
  message: string;
}
export default class CustomError extends Error {
  constructor(err: ICaughtError) {
    const error = err.response ? err.message : err.response;
    super(error as string);
  }
}
