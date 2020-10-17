declare module '@vue/runtime-core' {
    export interface ComponentCustomOptions {
        $socket: WebSocket;
        $mystuff: string;
    }
}