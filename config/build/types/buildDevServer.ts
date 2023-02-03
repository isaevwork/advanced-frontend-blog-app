import {BuildOptions} from "./config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port:options.port,
        open: true,
    }
}