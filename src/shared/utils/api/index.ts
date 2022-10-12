import mockApi from '@/shared/utils/api/api.mock';
import webApi from '@/shared/utils/api/api.web';
import { ApiRequest } from '@/shared/utils/api/types';

const api = import.meta.env.VITE_MOCK_WEB_API === 'true' ? mockApi : webApi;

export default {
  api,
  get: (args: ApiRequest) => api({ ...args, method: 'get' }),
  post: (args: ApiRequest) => api({ ...args, method: 'post' }),
  put: (args: ApiRequest) => api({ ...args, method: 'put' }),
  patch: (args: ApiRequest) => api({ ...args, method: 'patch' }),
  delete: (args: ApiRequest) => api({ ...args, method: 'delete' }),
};
