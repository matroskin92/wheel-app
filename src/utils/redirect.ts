import { MARK_IS_REDIRECTED, HOST } from '../constant';
import { IUrlParams } from '../constant';

const filterGetParams = (additional: IUrlParams[] | undefined) => {
  // Получаем текущие гет-параметры
  const currentParams = new URLSearchParams(location.search);
  const searchParams = new URLSearchParams();

  // Добавляем предусмотренные (статичные)
  if (additional) {
    for (let {key, value} of additional) {
      searchParams.append(key, value);
    }
  }

  // Добавляем из адресной строки
  currentParams.forEach((value, key) => {
    searchParams.append(key, value);
  });

  // Делаем красиво
  return searchParams.toString();
};

const checkEarlierRedirect = () => {
  const isRedirected = localStorage.getItem(MARK_IS_REDIRECTED);
  console.log('is redirected', isRedirected)
  if (isRedirected === 'true') {
    redirect(HOST);
  }
};

const redirect = (url: string, additional?: IUrlParams[]):void => {
  localStorage.setItem(MARK_IS_REDIRECTED, 'true');
  // location.assign(`${url}?${filterGetParams(additional)}`);
  alert(`redirect to ${url}?${filterGetParams(additional)}`)
};

export { checkEarlierRedirect };
export default redirect;