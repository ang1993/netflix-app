export interface contentFilms {
    category: string;
    filmInfo: IFilms[];
}

export interface IFilms {
    title: string;
    type: string;
    minutes: number;
    image: {
        src: string;
        alt: string;
    }
}


export interface top10Series {
    titles: titles10[]
}

export interface titles10 {
    number: number;
    image: {
        src: string;
        alt: string;
    }
}
