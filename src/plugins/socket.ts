import { App } from 'vue'

export interface ConfigOptions {
    hostname: string
}

export default {
    install: (app: App, options: ConfigOptions) => {
        app.config.globalProperties.$socket = new WebSocket(options.hostname);
        app.config.globalProperties.$mystuff = "custom_text";
    },
}