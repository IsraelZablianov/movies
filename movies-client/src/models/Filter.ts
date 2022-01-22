export enum MovieType {
    All = 'all',
    Movie = 'movie',
    Series = 'series',
}

export enum MovieQuality {
    All = 'all',
    HD = 'HD',
    SD = 'SD',
    CAM = 'CAM'
}

export interface FilterOptions {
    type: MovieType;
    quality: MovieQuality;
    searchTerm: string;
}