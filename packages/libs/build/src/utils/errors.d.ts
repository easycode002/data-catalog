export declare class ApplicationError extends Error {
    readonly status: number;
    errors?: {};
    constructor({ message, status, errors }: {
        message: string;
        status: number;
        errors?: {};
    });
}
export declare class InvalidInputError extends ApplicationError {
    constructor({ message, errors }: {
        message?: string;
        errors?: {};
    });
}
export declare class NotFoundError extends ApplicationError {
    constructor(message?: string);
}
export declare class AuthenticationError extends ApplicationError {
    constructor(message?: string);
}
export declare class AuthorizationError extends ApplicationError {
    constructor(message?: string);
}
export declare class ResourceConflictError extends ApplicationError {
    constructor(message?: string);
}
export declare class InternalServerError extends ApplicationError {
    constructor({ message, errors }: {
        message: string;
        errors?: {};
    });
}
