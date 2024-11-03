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

        createMany: procedure.input($Schema.PlaylistInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.createMany(input as any))),

        create: procedure.input($Schema.PlaylistInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.create(input as any))),

        deleteMany: procedure.input($Schema.PlaylistInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.deleteMany(input as any))),

        delete: procedure.input($Schema.PlaylistInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.delete(input as any))),

        findFirst: procedure.input($Schema.PlaylistInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlist.findFirst(input as any))),

        findMany: procedure.input($Schema.PlaylistInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlist.findMany(input as any))),

        findUnique: procedure.input($Schema.PlaylistInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).playlist.findUnique(input as any))),

        updateMany: procedure.input($Schema.PlaylistInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.updateMany(input as any))),

        update: procedure.input($Schema.PlaylistInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).playlist.update(input as any))),

        count: procedure.input($Schema.PlaylistInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).playlist.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PlaylistCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PlaylistCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistGetPayload<T>, Context>) => Promise<Prisma.PlaylistGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PlaylistDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlaylistDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistGetPayload<T>, Context>) => Promise<Prisma.PlaylistGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlaylistFindFirstArgs, TData = Prisma.PlaylistGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PlaylistFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaylistGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlaylistFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaylistGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaylistGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlaylistFindManyArgs, TData = Array<Prisma.PlaylistGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PlaylistFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlaylistGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PlaylistFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlaylistGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlaylistGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlaylistFindUniqueArgs, TData = Prisma.PlaylistGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlaylistFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlaylistGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlaylistFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlaylistFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlaylistGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlaylistGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PlaylistUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PlaylistUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlaylistUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlaylistGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlaylistGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlaylistUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlaylistUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlaylistGetPayload<T>, Context>) => Promise<Prisma.PlaylistGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PlaylistCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlaylistCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PlaylistCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PlaylistCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PlaylistCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PlaylistCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PlaylistCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PlaylistCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
