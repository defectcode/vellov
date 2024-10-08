import { ConfigService } from '@nestjs/config';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
declare const GoogleStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback): Promise<void>;
}
export {};
