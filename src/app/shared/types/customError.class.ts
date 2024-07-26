export class CustomError extends Error {
  constructor(public error: string) {
    super(error);
    this.name = 'CustomError';
  }
}
