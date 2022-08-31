import { atom, useRecoilValue } from 'recoil';
import { RECOIL_KEY } from '../recoilKeys';

type AppList = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const appList = atom<AppList[]>({
  key: RECOIL_KEY.ATOM_APP_LIST,
  default: [
    {
      // TODO:後で画像を設定する
      src: '',
      title: '文字数カウンタ',
      description: '文字列を入力すると文字数を表示してくれるサービスです。',
      link: '/sentence',
    },
  ],
});

export const useAppList = () => useRecoilValue(appList);
