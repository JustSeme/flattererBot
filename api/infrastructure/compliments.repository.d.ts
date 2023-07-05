import { UserContactsInfo } from "./userContactsInfoType";
export declare const ComplimentsRepository: {
    getRandomCompliment(): Promise<{
        responseText: string;
    }>;
    addUserContactInfo(UserContactsInfo: UserContactsInfo): Promise<void>;
    getAllUserContactsInfo(): Promise<import("mongodb").FindCursor<import("mongodb").WithId<{
        userId: number;
        chatId: number;
        first_name: string;
    }>>>;
    isMoreThenFiveMessages(userId: number): Promise<boolean>;
};
