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

        createMany: procedure.input($Schema.MeditationSessionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.createMany(input as any))),

        create: procedure.input($Schema.MeditationSessionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.create(input as any))),

        deleteMany: procedure.input($Schema.MeditationSessionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.deleteMany(input as any))),

        delete: procedure.input($Schema.MeditationSessionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.delete(input as any))),

        findFirst: procedure.input($Schema.MeditationSessionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).meditationSession.findFirst(input as any))),

        findMany: procedure.input($Schema.MeditationSessionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).meditationSession.findMany(input as any))),

        findUnique: procedure.input($Schema.MeditationSessionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).meditationSession.findUnique(input as any))),

        updateMany: procedure.input($Schema.MeditationSessionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.updateMany(input as any))),

        update: procedure.input($Schema.MeditationSessionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).meditationSession.update(input as any))),

        count: procedure.input($Schema.MeditationSessionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).meditationSession.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MeditationSessionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MeditationSessionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MeditationSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MeditationSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MeditationSessionGetPayload<T>, Context>) => Promise<Prisma.MeditationSessionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MeditationSessionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MeditationSessionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MeditationSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MeditationSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MeditationSessionGetPayload<T>, Context>) => Promise<Prisma.MeditationSessionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MeditationSessionFindFirstArgs, TData = Prisma.MeditationSessionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MeditationSessionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MeditationSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MeditationSessionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MeditationSessionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MeditationSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MeditationSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MeditationSessionFindManyArgs, TData = Array<Prisma.MeditationSessionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MeditationSessionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MeditationSessionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MeditationSessionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MeditationSessionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MeditationSessionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MeditationSessionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MeditationSessionFindUniqueArgs, TData = Prisma.MeditationSessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MeditationSessionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MeditationSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MeditationSessionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MeditationSessionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MeditationSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MeditationSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MeditationSessionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MeditationSessionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MeditationSessionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MeditationSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MeditationSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MeditationSessionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MeditationSessionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MeditationSessionGetPayload<T>, Context>) => Promise<Prisma.MeditationSessionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MeditationSessionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MeditationSessionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MeditationSessionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MeditationSessionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MeditationSessionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MeditationSessionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MeditationSessionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MeditationSessionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
