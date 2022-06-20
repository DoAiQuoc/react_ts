import { Student } from './../models/student';
import { ListResponse, ListParams } from './../models/common';
import http from './http';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return http.get(url, { params });
  },
  getById(id: number) {
    const url = `/students/${id}`;
    return http.get(url);
  },
  add(data: Student): Promise<Student> {
    const url = '/students';
    return http.post(url, data);
  },
  update(data: Student): Promise<Student> {
    const url = '/students';
    return http.patch(url, data);
  },
  delete(id: number): Promise<any> {
    const url = `/students/${id}`;
    return http.delete(url);
  },
};

export default studentApi;
