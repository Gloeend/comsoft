export interface IDialogUser {
    name: string,
    year: number | string,
    previewLink: string,
    message: string,
    updated_at: Date | number;
    chat_id: string;
}

export interface IDialogMessage {
    chat_id: string;
    message: string;

}