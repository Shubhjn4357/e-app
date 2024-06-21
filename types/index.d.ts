import { Cart, Image, Product, Review } from "@prisma/client";

declare const MAIL_ERROR_CODES_BY_KEY: {
    readonly missing_required_field: 422;
    readonly invalid_access: 422;
    readonly invalid_parameter: 422;
    readonly invalid_region: 422;
    readonly rate_limit_exceeded: 429;
    readonly missing_api_key: 401;
    readonly invalid_api_Key: 403;
    readonly invalid_from_address: 403;
    readonly validation_error: 403;
    readonly not_found: 404;
    readonly method_not_allowed: 405;
    readonly application_error: 500;
    readonly internal_server_error: 500;
  };
    export type MAil_ERROR_CODE_KEY = keyof typeof MAIL_ERROR_CODES_BY_KEY;
    export interface ErrorResponse {
        message: string;
        name: MAIL_ERROR_CODE_KEY;
      }
        
    export interface CustomError extends Error {
        code: string;
    }
export type order = "asc" | "desc"

export type ProductsWithImage = Product & { image: Image[] };
export type ProductsWithImageAndReview = Product & { image: Image[],reviews:Review[] };
export type ProductsWithCart =  Cart & {product:ProductsWithImage};