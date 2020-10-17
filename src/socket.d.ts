import { ComponentCustomProperties } from '@vue/runtime-core'
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $socket: WebSocket;
        $mystuff: string;
    }
}