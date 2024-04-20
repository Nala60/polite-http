import { Request, Response, NextFunction } from 'express'

declare interface politeHTTPOptions {
    /**
     * Replace the default message that appears in the HTTP header.
     * @since 0.1.0
     */
    message: string,
    /**
     * Whether or not to add "X-" at the begining of the Header name
     * @since 0.1.0
     */
    addX: boolean,
    /**
     * Replace the default header name for the message. The "X-" prefix should be configured with the `addX` property instead.
     * @since 0.1.0
     */
    headerName: string,
    /**
     * If true, the default "X-Powered-By: Express" express header will be replaced with the contents of the `poweredBy` property.
     * Disabling the "x-powered-by" setting in express will override this.
     * @since 0.1.0
     */
    replacePoweredBy: boolean,
    /**
     * Replace the default X-Powered-By header text. Ignored if `replacePoweredBy` is set to false.
     * @since 0.1.0
     */
    poweredBy: string
}

/**
 * Express middleware that makes every request a little bit more polite.
 */
type politeHTTPMiddleware = (req: Request, res: Response, next: NextFunction) => void;

/**
 * Create a polite middleware for express!
 * @param options Optional object changing the default behaviour.
 */
declare function politeHTTP(options?: politeHTTPOptions): politeHTTPMiddleware;

export = politeHTTP;
