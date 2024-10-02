import { setLocale } from 'yup'; // @vee-validate/i18nのsetLocaleと被るので、別名指定をしています。
import { suggestive } from 'yup-locale-ja';

export default defineNuxtPlugin(() => {
  // yupのバリデーションメッセージを日本語にする設定
  setLocale(suggestive);
});
