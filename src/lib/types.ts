export class TwitchStatsData {
    constructor(
        // eslint-disable-next-line no-unused-vars
        public twitch_viewers: number,
        // eslint-disable-next-line no-unused-vars
        public twitch_followers: number,
        // eslint-disable-next-line no-unused-vars
        public twitch_latest_follower: string) { }
}

export class YouTubeStatsData {
    constructor(
        // eslint-disable-next-line no-unused-vars
        public youtube_viewers: number,
        // eslint-disable-next-line no-unused-vars
        public youtube_followers: number,
        // eslint-disable-next-line no-unused-vars
        public youtube_latest_follower: string
    ) { }
}

export type StreamStatsData = YouTubeStatsData | TwitchStatsData;

// Pitch default 1.0
// Rate default 1.0
// Volume default 1.0
export class TextToSpeechMessage {
    constructor(
        public text: string,
        public voice: VoiceMapping,
        public pitch?: number,
        public rate?: number,
        public volume?: number
    ) { }
}

export enum VoiceMapping {
    hazel = "Microsoft Hazel Desktop",
    zira = "Microsoft Zira Desktop",
}

export type AllMessages = TextToSpeechMessage | StreamStatsData;