declare var ENV: string;
declare var HMR: boolean;
declare var System: SystemJS;

interface SystemJS {
   import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
   ENV: string;
   HMR: boolean;
   SystemJS: SystemJS;
   System: SystemJS;
}

interface ErrorStackTraceLimit {
   stackTraceLimit: number;
}

interface ErrorConstructor extends ErrorStackTraceLimit { }
interface Global extends GlobalEnvironment { }
