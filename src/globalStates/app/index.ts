import { atom, useRecoilValue } from 'recoil';
import { RECOIL_KEY } from '../recoilKeys';

export type AppInfo = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const appInfoList = atom<AppInfo[]>({
  key: RECOIL_KEY.ATOM_APP_INFO_LIST,
  default: [
    {
      // TODO:後で画像を設定する
      src: '/',
      title: '文字数カウンタ',
      description: '文字列を入力すると文字数を表示してくれるサービスです。',
      link: '/sentence',
    },
  ],
});

export const useAppInfoList = () => useRecoilValue(appInfoList);
