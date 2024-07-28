/**
 * Base HTTP error class
 */
class HttpError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * BadRequestError class representing a 400 error
 */
export class BadRequestError extends HttpError {}

/**
 * UnauthorizedError class representing a 401 error
 */
export class UnauthorizedError extends HttpError {}

/**
 * NotFoundError class representing a 404 error
 */
export class NotFoundError extends HttpError {}

/**
 * ConflictError class representing a 409 error
 */
export class ConflictError extends HttpError {}

/**
 * TooManyRequestsError class representing a 429 error
 */
export class TooManyRequestsError extends HttpError {}

/**
 * InternalServerError class representing a 500 error
 */
export class InternalServerError extends HttpError {}

/**
 * BadGatewayError class representing a 502 error
 */
export class BadGatewayError extends HttpError {}
