import { HardhatResult } from "../types/index.js";
export declare class ProcessRunner {
    static runHardhatCommand(args: string[], options?: {
        cwd?: string;
        env?: Record<string, string>;
        input?: string;
    }): Promise<HardhatResult>;
    static runNpmCommand(args: string[], options?: {
        cwd?: string;
        env?: Record<string, string>;
    }): Promise<HardhatResult>;
}
