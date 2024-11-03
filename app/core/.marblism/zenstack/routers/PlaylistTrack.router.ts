/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PlaylistTrackInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.createMany(input as any))),

        create: procedure.input($Schema.PlaylistTrackInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.create(input as any))),

        deleteMany: procedure.input($Schema.PlaylistTrackInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.deleteMany(input as any))),

        delete: procedure.input($Schema.PlaylistTrackInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.delete(input as any))),

        findFirst: procedure.input($Schema.PlaylistTrackInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlistTrack.findFirst(input as any))),

        findMany: procedure.input($Schema.PlaylistTrackInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlistTrack.findMany(input as any))),

        findUnique: procedure.input($Schema.PlaylistTrackInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).playlistTrack.findUnique(input as any))),

        updateMany: procedure.input($Schema.PlaylistTrackInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.updateMany(input as any))),

        update: procedure.input($Schema.PlaylistTrackInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlistTrack.update(input as any))),

        count: procedure.input($Schema.PlaylistTrackInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlistTrack.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PlaylistTrackCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PlaylistTrackCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistTrackGetPayload<T>, Context>) => Promise<Prisma.PlaylistTrackGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PlaylistTrackDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlaylistTrackDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistTrackGetPayload<T>, Context>) => Promise<Prisma.PlaylistTrackGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlaylistTrackFindFirstArgs, TData = Prisma.PlaylistTrackGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PlaylistTrackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaylistTrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistTrackFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlaylistTrackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaylistTrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaylistTrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlaylistTrackFindManyArgs, TData = Array<Prisma.PlaylistTrackGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PlaylistTrackFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlaylistTrackGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistTrackFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlaylistTrackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlaylistTrackGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlaylistTrackGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlaylistTrackFindUniqueArgs, TData = Prisma.PlaylistTrackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlaylistTrackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaylistTrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistTrackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlaylistTrackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaylistTrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaylistTrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PlaylistTrackUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PlaylistTrackUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistTrackUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistTrackUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistTrackUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistTrackGetPayload<T>, Context>) => Promise<Prisma.PlaylistTrackGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PlaylistTrackCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlaylistTrackCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PlaylistTrackCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PlaylistTrackCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PlaylistTrackCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PlaylistTrackCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PlaylistTrackCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlaylistTrackCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
