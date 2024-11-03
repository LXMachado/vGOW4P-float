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

        createMany: procedure.input($Schema.TrackInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.createMany(input as any))),

        create: procedure.input($Schema.TrackInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.create(input as any))),

        deleteMany: procedure.input($Schema.TrackInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.deleteMany(input as any))),

        delete: procedure.input($Schema.TrackInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.delete(input as any))),

        findFirst: procedure.input($Schema.TrackInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).track.findFirst(input as any))),

        findMany: procedure.input($Schema.TrackInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).track.findMany(input as any))),

        findUnique: procedure.input($Schema.TrackInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).track.findUnique(input as any))),

        updateMany: procedure.input($Schema.TrackInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.updateMany(input as any))),

        update: procedure.input($Schema.TrackInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).track.update(input as any))),

        count: procedure.input($Schema.TrackInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).track.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TrackCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TrackCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackGetPayload<T>, Context>) => Promise<Prisma.TrackGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TrackDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TrackDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackGetPayload<T>, Context>) => Promise<Prisma.TrackGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TrackFindFirstArgs, TData = Prisma.TrackGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TrackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TrackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TrackFindManyArgs, TData = Array<Prisma.TrackGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TrackFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TrackGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TrackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TrackGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TrackGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TrackFindUniqueArgs, TData = Prisma.TrackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TrackUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TrackUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackGetPayload<T>, Context>) => Promise<Prisma.TrackGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TrackCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TrackCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TrackCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TrackCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TrackCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TrackCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TrackCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TrackCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
