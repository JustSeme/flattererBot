export declare const ComplimentsCollection: import("mongodb").Collection<{
    id: number;
    complimentText: string;
}>;
export declare const UserContactsInfoCollection: import("mongodb").Collection<{
    userId: number;
    chatId: number;
    first_name: string;
}>;
export declare function runDB(): Promise<void>;
