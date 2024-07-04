export interface IMessageUser {
    name: string,
    previewLink: string,
    message: string,
    updated_at: Date | number;
    chat_id: string;
    isMe: boolean;
}