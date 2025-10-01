import { ToolResponse } from "../types/index.js";
export declare class ContractHandlers {
    static handleCompile(args: any): Promise<ToolResponse>;
    static handleDeploy(args: any): Promise<ToolResponse>;
    static handleVerify(args: any): Promise<ToolResponse>;
    static handleTest(args: any): Promise<ToolResponse>;
    static handleConsole(args: any): Promise<ToolResponse>;
    static handleRunScript(args: any): Promise<ToolResponse>;
    static handleClean(args: any): Promise<ToolResponse>;
    static handleFlatten(args: any): Promise<ToolResponse>;
}
