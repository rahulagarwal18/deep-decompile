import { DecompileOptions, DecompileResult } from './types.js';
export declare class DecompilerEngine {
    private options;
    constructor(options: DecompileOptions);
    run(): Promise<DecompileResult>;
    private generateProjectScaffold;
}
