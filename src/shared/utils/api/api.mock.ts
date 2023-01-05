import _ from 'lodash';
import mocks from '@/shared/utils/api/mock';
import { ApiRequestInternal } from './types';

const mockApi = ({ method, url, body, queryParams }: ApiRequestInternal): Promise<any> => {
  return new Promise((resolve) => {
    url = '/' + url;
    setTimeout(() => {
      const mock = mocks.find((q) => q.method === method && q.url.test(url));
      resolve(mock?.body);
    }, _.random());
  });
};

export default mockApi;
