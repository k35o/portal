import { atom, useRecoilValue } from 'recoil';
import { RECOIL_KEY } from '../recoilKeys';

export type AppInfo = {
  emotion: string;
  title: string;
  description: string;
  link: string;
};

const appInfoList = atom<AppInfo[]>({
  key: RECOIL_KEY.ATOM_APP_INFO_LIST,
  default: [
    {
      emotion: '✏️',
      title: '文字数カウンタ',
      description: '文字列を入力すると文字数を表示してくれるサービスです。',
      link: '/sentence',
    },
  ],
});

export const appInfo = {
  useWithCommingSoonValue: () => {
    const baseAppInfoList = useRecoilValue(appInfoList);
    return [
      ...baseAppInfoList,
      {
        emotion: '🚧',
        title: '準備中',
        description: '新しいアプリを開発中です。',
        link: '/',
      },
    ];
  },
};
