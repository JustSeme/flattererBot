export declare const BotService: {
    start(): {
        stickerURL: string;
        responseText: string;
    };
    info(currentUserDate: number, username: string): {
        responseText: string;
    };
    getCompliment(): Promise<{
        responseText: string;
    }>;
};
