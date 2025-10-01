import { ToolResponse } from "../types/index.js";
export declare class FileHandlers {
    static handleCreateContract(args: any): Promise<ToolResponse>;
    static handleCreateTest(args: any): Promise<ToolResponse>;
    static handleCreateIgnitionModule(args: any): Promise<ToolResponse>;
    static handleReadFile(args: any): Promise<ToolResponse>;
    static handleListFiles(args: any): Promise<ToolResponse>;
}
