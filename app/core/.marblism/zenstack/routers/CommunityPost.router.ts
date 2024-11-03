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

        createMany: procedure.input($Schema.CommunityPostInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.createMany(input as any))),

        create: procedure.input($Schema.CommunityPostInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.create(input as any))),

        deleteMany: procedure.input($Schema.CommunityPostInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.deleteMany(input as any))),

        delete: procedure.input($Schema.CommunityPostInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.delete(input as any))),

        findFirst: procedure.input($Schema.CommunityPostInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).communityPost.findFirst(input as any))),

        findMany: procedure.input($Schema.CommunityPostInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).communityPost.findMany(input as any))),

        findUnique: procedure.input($Schema.CommunityPostInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).communityPost.findUnique(input as any))),

        updateMany: procedure.input($Schema.CommunityPostInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.updateMany(input as any))),

        update: procedure.input($Schema.CommunityPostInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).communityPost.update(input as any))),

        count: procedure.input($Schema.CommunityPostInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).communityPost.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CommunityPostCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CommunityPostCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CommunityPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CommunityPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CommunityPostGetPayload<T>, Context>) => Promise<Prisma.CommunityPostGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CommunityPostDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CommunityPostDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CommunityPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CommunityPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CommunityPostGetPayload<T>, Context>) => Promise<Prisma.CommunityPostGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CommunityPostFindFirstArgs, TData = Prisma.CommunityPostGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CommunityPostFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CommunityPostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CommunityPostFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CommunityPostFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CommunityPostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CommunityPostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CommunityPostFindManyArgs, TData = Array<Prisma.CommunityPostGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CommunityPostFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CommunityPostGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CommunityPostFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CommunityPostFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CommunityPostGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CommunityPostGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CommunityPostFindUniqueArgs, TData = Prisma.CommunityPostGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CommunityPostFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CommunityPostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CommunityPostFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CommunityPostFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CommunityPostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CommunityPostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CommunityPostUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CommunityPostUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CommunityPostUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CommunityPostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CommunityPostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CommunityPostUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CommunityPostUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CommunityPostGetPayload<T>, Context>) => Promise<Prisma.CommunityPostGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CommunityPostCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CommunityPostCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CommunityPostCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CommunityPostCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CommunityPostCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CommunityPostCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CommunityPostCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CommunityPostCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
