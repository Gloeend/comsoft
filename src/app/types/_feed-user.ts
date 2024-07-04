import {ITags} from "@app/types/_tags-user.ts";

export interface IFeedUser extends ITagsList, IVerification {
    description: string;
    name: string;
    year: string;
    city: string;
    verification: boolean;
    previewLink: string;
}

export interface ITagsList {
    tags: ITags;
}

export interface IVerification {
    verification: boolean;
}