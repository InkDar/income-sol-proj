import { Method } from 'axios';

export type QueryParams = {
  [key: string]: string;
};

export type RequestBody = any;
export type RequestMethod = Method;

export type ApiRequest = {
  url: string;
  body?: RequestBody;
  queryParams?: QueryParams;
};

export type ApiRequestInternal = ApiRequest & {
  method: RequestMethod;
};

export type ApiResponse = Promise<any>;
