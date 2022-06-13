interface Entity {
  mal_id: number
  name: string
  type: string
  url: string
}

interface Genre extends Entity {}

interface Producer extends Entity {}

interface Studio extends Entity {}

interface Theme extends Entity {}

export interface AnimeTitle {
  aired: {
    from: string
    to: string
    string: string
  }
  airing: boolean
  duration: string
  episodes: number
  favorites: number
  genres: Genre[]
  images: {
    jpg: {
      image_url: string
      large_image_url: string
      small_image_url: string
    }
    webp: {
      image_url: string
      large_image_url: string
      small_image_url: string
    }
  }
  mal_id: number
  members: number
  popularity: number
  producers: Producer[]
  rank: number
  rating: string
  score?: number
  season: string
  status: string
  studios: Studio[]
  synopsis: string
  themes: Theme[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: AnimeType
  url: string
  year: number
}

export const enum AnimeType {
  MOVIE = 'movie',
  ANIME = 'TV',
}
