import { ToolResponse } from "../types/index.js";
export declare class BlockchainHandlers {
    static handleEthCall(args: any): Promise<ToolResponse>;
    static handleEthSendTransaction(args: any): Promise<ToolResponse>;
    static handleEthGetBalance(args: any): Promise<ToolResponse>;
    static handleEthGetTransactionReceipt(args: any): Promise<ToolResponse>;
    static handleInstallDependency(args: any): Promise<ToolResponse>;
}
