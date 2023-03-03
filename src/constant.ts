const ADDITIONAL_URL_PARAMS: IUrlParams[] = [{key: 'sign-up', value: 'modal'}];
const MARK_IS_REDIRECTED = `wheel_app_is_redirected`;
const HOST = 'https://loftcas.com/';

export interface IUrlParams {
  key: string;
  value: string;
}

export {
  ADDITIONAL_URL_PARAMS,
  MARK_IS_REDIRECTED,
  HOST
};
