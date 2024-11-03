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

        createMany: procedure.input($Schema.FavoriteInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.createMany(input as any))),

        create: procedure.input($Schema.FavoriteInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.create(input as any))),

        deleteMany: procedure.input($Schema.FavoriteInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.deleteMany(input as any))),

        delete: procedure.input($Schema.FavoriteInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.delete(input as any))),

        findFirst: procedure.input($Schema.FavoriteInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).favorite.findFirst(input as any))),

        findMany: procedure.input($Schema.FavoriteInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).favorite.findMany(input as any))),

        findUnique: procedure.input($Schema.FavoriteInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).favorite.findUnique(input as any))),

        updateMany: procedure.input($Schema.FavoriteInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.updateMany(input as any))),

        update: procedure.input($Schema.FavoriteInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).favorite.update(input as any))),

        count: procedure.input($Schema.FavoriteInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).favorite.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FavoriteCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FavoriteCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FavoriteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FavoriteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FavoriteGetPayload<T>, Context>) => Promise<Prisma.FavoriteGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FavoriteDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FavoriteDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FavoriteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FavoriteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FavoriteGetPayload<T>, Context>) => Promise<Prisma.FavoriteGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FavoriteFindFirstArgs, TData = Prisma.FavoriteGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.FavoriteFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FavoriteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FavoriteFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FavoriteFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FavoriteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FavoriteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FavoriteFindManyArgs, TData = Array<Prisma.FavoriteGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.FavoriteFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FavoriteGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FavoriteFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FavoriteFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FavoriteGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FavoriteGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FavoriteFindUniqueArgs, TData = Prisma.FavoriteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FavoriteFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FavoriteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FavoriteFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FavoriteFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FavoriteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FavoriteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FavoriteUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FavoriteUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FavoriteUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FavoriteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FavoriteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FavoriteUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FavoriteUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FavoriteGetPayload<T>, Context>) => Promise<Prisma.FavoriteGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.FavoriteCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FavoriteCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.FavoriteCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FavoriteCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.FavoriteCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.FavoriteCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FavoriteCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FavoriteCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
