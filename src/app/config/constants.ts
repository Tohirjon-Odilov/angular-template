// constants.ts
export const ROLES = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  USER: 'user',
};

export const API_URLS = {
  LOGIN_URL: 'https://database-back-end-production.up.railway.app/api/login/',
  OTHER_API_URL: 'https://example.com/other-api',
  USERS: 'https://api.example.com/users',
};

export const STATUS_CODES = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_ERROR: 500,
  BAD_REQUEST: 400,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_MODIFIED: 304,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  TOO_MANY_REQUESTS: 429,
  UNPROCESSABLE_ENTITY: 422,
};

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};
