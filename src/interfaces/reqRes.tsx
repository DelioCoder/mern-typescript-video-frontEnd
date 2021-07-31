export interface Video {
    _id?:         string;
    url:         string;
    title:       string;
    description: string;
    createdAt?:   Date;
    updatedAt?:   Date;
}

export interface Params {
    id: string;
}

export interface Rest {
    title:       string;
    url:         string;
    description: string;
}
