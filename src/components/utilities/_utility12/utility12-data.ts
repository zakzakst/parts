export type categoryId = 'news' | 'event' | 'blog'

export type newsItem = {
  date: {
    year: number,
    month: number,
    day: number,
  },
  categoryId: categoryId,
  title: string,
}

export type categoryItem = {
  id: categoryId,
  label: string,
}

export const categoryItems: categoryItem[] = [
  {
    id: 'news',
    label: 'お知らせ',
  },
  {
    id: 'event',
    label: 'イベント',
  },
  {
    id: 'blog',
    label: 'ブログ',
  },
]