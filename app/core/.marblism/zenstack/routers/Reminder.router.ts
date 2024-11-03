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

        createMany: procedure.input($Schema.ReminderInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.createMany(input as any))),

        create: procedure.input($Schema.ReminderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.create(input as any))),

        deleteMany: procedure.input($Schema.ReminderInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.deleteMany(input as any))),

        delete: procedure.input($Schema.ReminderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.delete(input as any))),

        findFirst: procedure.input($Schema.ReminderInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).reminder.findFirst(input as any))),

        findMany: procedure.input($Schema.ReminderInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).reminder.findMany(input as any))),

        findUnique: procedure.input($Schema.ReminderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).reminder.findUnique(input as any))),

        updateMany: procedure.input($Schema.ReminderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.updateMany(input as any))),

        update: procedure.input($Schema.ReminderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).reminder.update(input as any))),

        count: procedure.input($Schema.ReminderInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).reminder.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ReminderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ReminderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReminderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReminderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReminderGetPayload<T>, Context>) => Promise<Prisma.ReminderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ReminderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ReminderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReminderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReminderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReminderGetPayload<T>, Context>) => Promise<Prisma.ReminderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ReminderFindFirstArgs, TData = Prisma.ReminderGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ReminderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReminderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReminderFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ReminderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReminderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReminderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ReminderFindManyArgs, TData = Array<Prisma.ReminderGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ReminderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ReminderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReminderFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ReminderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReminderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ReminderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ReminderFindUniqueArgs, TData = Prisma.ReminderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReminderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReminderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReminderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReminderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReminderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReminderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ReminderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ReminderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReminderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReminderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReminderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReminderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReminderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReminderGetPayload<T>, Context>) => Promise<Prisma.ReminderGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ReminderCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ReminderCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ReminderCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ReminderCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ReminderCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ReminderCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ReminderCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ReminderCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
