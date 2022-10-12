import api from '@/shared/utils/api';

class AuthService {
  getUser = async (): Promise<any> => {
    return await api.get({
      method: 'get',
      url: 'users/signin',
    } as any);
  };
}

export default new AuthService();
