export interface contentFilms {
    category: string;
    filmInfo: IFilms[];
}

export interface IFilms {
    title: string;
    type: string;
    minutes: number;
    image: myImageI;
}

export interface top10Series {
    titles: titles10[]
}

export interface titles10 {
    number: number;
    image: myImageI;
}

export interface myImageI {
        src: string;
        alt: string;
    }