import { City } from './../models/city';
import { ListResponse } from './../models/common';
import http from './http';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return http.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
