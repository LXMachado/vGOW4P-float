/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createCategoryRouter from "./Category.router";
import createTrackRouter from "./Track.router";
import createPlaylistRouter from "./Playlist.router";
import createPlaylistTrackRouter from "./PlaylistTrack.router";
import createMeditationSessionRouter from "./MeditationSession.router";
import createSubscriptionRouter from "./Subscription.router";
import createReminderRouter from "./Reminder.router";
import createFavoriteRouter from "./Favorite.router";
import createCommunityPostRouter from "./CommunityPost.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as TrackClientType } from "./Track.router";
import { ClientType as PlaylistClientType } from "./Playlist.router";
import { ClientType as PlaylistTrackClientType } from "./PlaylistTrack.router";
import { ClientType as MeditationSessionClientType } from "./MeditationSession.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as ReminderClientType } from "./Reminder.router";
import { ClientType as FavoriteClientType } from "./Favorite.router";
import { ClientType as CommunityPostClientType } from "./CommunityPost.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        category: createCategoryRouter(router, procedure),
        track: createTrackRouter(router, procedure),
        playlist: createPlaylistRouter(router, procedure),
        playlistTrack: createPlaylistTrackRouter(router, procedure),
        meditationSession: createMeditationSessionRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        reminder: createReminderRouter(router, procedure),
        favorite: createFavoriteRouter(router, procedure),
        communityPost: createCommunityPostRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    track: TrackClientType<AppRouter>;
    playlist: PlaylistClientType<AppRouter>;
    playlistTrack: PlaylistTrackClientType<AppRouter>;
    meditationSession: MeditationSessionClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    reminder: ReminderClientType<AppRouter>;
    favorite: FavoriteClientType<AppRouter>;
    communityPost: CommunityPostClientType<AppRouter>;
}
