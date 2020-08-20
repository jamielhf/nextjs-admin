export interface IBaseRes<T = any> {
  code: number;
  data: T;
  msg: string
}
