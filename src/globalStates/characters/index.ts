import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { RECOIL_KEY } from '../recoilKeys';

const text = atom<string>({
  key: RECOIL_KEY.ATOM_CHARACTERS_TEXT,
  default: '',
});

export const charactersText = {
  useTextState: () => useRecoilState(text),
};
