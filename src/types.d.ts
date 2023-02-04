export type ILanguage = 'ru' | 'en';

export type ITString = {
  ru: string | null,
  en: string | null,
};

export type IBookItem = {
  id: string,
  authors: Array<ITString>,
  title: ITString
  mainLang: ILanguage,
  read: boolean,
  refsNumber: number,
}