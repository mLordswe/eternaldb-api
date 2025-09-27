
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model employees
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model guild
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type guild = $Result.DefaultSelection<Prisma.$guildPayload>
/**
 * Model member
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model quests
 * 
 */
export type quests = $Result.DefaultSelection<Prisma.$questsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employees.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employees.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guild`: Exposes CRUD operations for the **guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.guildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quests`: Exposes CRUD operations for the **quests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quests.findMany()
    * ```
    */
  get quests(): Prisma.questsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    employees: 'employees',
    guild: 'guild',
    member: 'member',
    quests: 'quests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employees" | "guild" | "member" | "quests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      guild: {
        payload: Prisma.$guildPayload<ExtArgs>
        fields: Prisma.guildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.guildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.guildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          findFirst: {
            args: Prisma.guildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.guildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          findMany: {
            args: Prisma.guildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>[]
          }
          create: {
            args: Prisma.guildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          createMany: {
            args: Prisma.guildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.guildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          update: {
            args: Prisma.guildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          deleteMany: {
            args: Prisma.guildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.guildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.guildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.guildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.guildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      quests: {
        payload: Prisma.$questsPayload<ExtArgs>
        fields: Prisma.questsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          findFirst: {
            args: Prisma.questsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          findMany: {
            args: Prisma.questsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>[]
          }
          create: {
            args: Prisma.questsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          createMany: {
            args: Prisma.questsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          update: {
            args: Prisma.questsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          deleteMany: {
            args: Prisma.questsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          aggregate: {
            args: Prisma.QuestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuests>
          }
          groupBy: {
            args: Prisma.questsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employees?: employeesOmit
    guild?: guildOmit
    member?: memberOmit
    quests?: questsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestsCountOutputType
   */

  export type QuestsCountOutputType = {
    member: number
  }

  export type QuestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | QuestsCountOutputTypeCountMemberArgs
  }

  // Custom InputTypes
  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestsCountOutputType
     */
    select?: QuestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
    Salary: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
    Salary: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Role: string | null
    Salary: number | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Role: string | null
    Salary: number | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    Name: number
    Role: number
    Salary: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
    Salary?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
    Salary?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    Name?: true
    Role?: true
    Salary?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    Name?: true
    Role?: true
    Salary?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    Name?: true
    Role?: true
    Salary?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: number
    Name: string | null
    Role: string | null
    Salary: number | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Role?: boolean
    Salary?: boolean
  }, ExtArgs["result"]["employees"]>



  export type employeesSelectScalar = {
    id?: boolean
    Name?: boolean
    Role?: boolean
    Salary?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Role" | "Salary", ExtArgs["result"]["employees"]>

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string | null
      Role: string | null
      Salary: number | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees model
   */
  interface employeesFieldRefs {
    readonly id: FieldRef<"employees", 'Int'>
    readonly Name: FieldRef<"employees", 'String'>
    readonly Role: FieldRef<"employees", 'String'>
    readonly Salary: FieldRef<"employees", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data?: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
  }


  /**
   * Model guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildAvgAggregateOutputType = {
    treasury: number | null
    guild_id: number | null
  }

  export type GuildSumAggregateOutputType = {
    treasury: bigint | null
    guild_id: number | null
  }

  export type GuildMinAggregateOutputType = {
    treasury: bigint | null
    guild_id: number | null
    guild_name: string | null
  }

  export type GuildMaxAggregateOutputType = {
    treasury: bigint | null
    guild_id: number | null
    guild_name: string | null
  }

  export type GuildCountAggregateOutputType = {
    treasury: number
    guild_id: number
    guild_name: number
    _all: number
  }


  export type GuildAvgAggregateInputType = {
    treasury?: true
    guild_id?: true
  }

  export type GuildSumAggregateInputType = {
    treasury?: true
    guild_id?: true
  }

  export type GuildMinAggregateInputType = {
    treasury?: true
    guild_id?: true
    guild_name?: true
  }

  export type GuildMaxAggregateInputType = {
    treasury?: true
    guild_id?: true
    guild_name?: true
  }

  export type GuildCountAggregateInputType = {
    treasury?: true
    guild_id?: true
    guild_name?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guild to aggregate.
     */
    where?: guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guilds to fetch.
     */
    orderBy?: guildOrderByWithRelationInput | guildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type guildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: guildWhereInput
    orderBy?: guildOrderByWithAggregationInput | guildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: guildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _avg?: GuildAvgAggregateInputType
    _sum?: GuildSumAggregateInputType
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    treasury: bigint | null
    guild_id: number
    guild_name: string | null
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends guildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type guildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    treasury?: boolean
    guild_id?: boolean
    guild_name?: boolean
  }, ExtArgs["result"]["guild"]>



  export type guildSelectScalar = {
    treasury?: boolean
    guild_id?: boolean
    guild_name?: boolean
  }

  export type guildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"treasury" | "guild_id" | "guild_name", ExtArgs["result"]["guild"]>

  export type $guildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "guild"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      treasury: bigint | null
      guild_id: number
      guild_name: string | null
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type guildGetPayload<S extends boolean | null | undefined | guildDefaultArgs> = $Result.GetResult<Prisma.$guildPayload, S>

  type guildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<guildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface guildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['guild'], meta: { name: 'guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {guildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends guildFindUniqueArgs>(args: SelectSubset<T, guildFindUniqueArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {guildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends guildFindUniqueOrThrowArgs>(args: SelectSubset<T, guildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends guildFindFirstArgs>(args?: SelectSubset<T, guildFindFirstArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends guildFindFirstOrThrowArgs>(args?: SelectSubset<T, guildFindFirstOrThrowArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `treasury`
     * const guildWithTreasuryOnly = await prisma.guild.findMany({ select: { treasury: true } })
     * 
     */
    findMany<T extends guildFindManyArgs>(args?: SelectSubset<T, guildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guild.
     * @param {guildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends guildCreateArgs>(args: SelectSubset<T, guildCreateArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guilds.
     * @param {guildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends guildCreateManyArgs>(args?: SelectSubset<T, guildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guild.
     * @param {guildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends guildDeleteArgs>(args: SelectSubset<T, guildDeleteArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guild.
     * @param {guildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends guildUpdateArgs>(args: SelectSubset<T, guildUpdateArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guilds.
     * @param {guildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends guildDeleteManyArgs>(args?: SelectSubset<T, guildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends guildUpdateManyArgs>(args: SelectSubset<T, guildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guild.
     * @param {guildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends guildUpsertArgs>(args: SelectSubset<T, guildUpsertArgs<ExtArgs>>): Prisma__guildClient<$Result.GetResult<Prisma.$guildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends guildCountArgs>(
      args?: Subset<T, guildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends guildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: guildGroupByArgs['orderBy'] }
        : { orderBy?: guildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, guildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the guild model
   */
  readonly fields: guildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__guildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the guild model
   */
  interface guildFieldRefs {
    readonly treasury: FieldRef<"guild", 'BigInt'>
    readonly guild_id: FieldRef<"guild", 'Int'>
    readonly guild_name: FieldRef<"guild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * guild findUnique
   */
  export type guildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter, which guild to fetch.
     */
    where: guildWhereUniqueInput
  }

  /**
   * guild findUniqueOrThrow
   */
  export type guildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter, which guild to fetch.
     */
    where: guildWhereUniqueInput
  }

  /**
   * guild findFirst
   */
  export type guildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter, which guild to fetch.
     */
    where?: guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guilds to fetch.
     */
    orderBy?: guildOrderByWithRelationInput | guildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guilds.
     */
    cursor?: guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * guild findFirstOrThrow
   */
  export type guildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter, which guild to fetch.
     */
    where?: guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guilds to fetch.
     */
    orderBy?: guildOrderByWithRelationInput | guildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guilds.
     */
    cursor?: guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * guild findMany
   */
  export type guildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter, which guilds to fetch.
     */
    where?: guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guilds to fetch.
     */
    orderBy?: guildOrderByWithRelationInput | guildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing guilds.
     */
    cursor?: guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * guild create
   */
  export type guildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * The data needed to create a guild.
     */
    data?: XOR<guildCreateInput, guildUncheckedCreateInput>
  }

  /**
   * guild createMany
   */
  export type guildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many guilds.
     */
    data: guildCreateManyInput | guildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * guild update
   */
  export type guildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * The data needed to update a guild.
     */
    data: XOR<guildUpdateInput, guildUncheckedUpdateInput>
    /**
     * Choose, which guild to update.
     */
    where: guildWhereUniqueInput
  }

  /**
   * guild updateMany
   */
  export type guildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update guilds.
     */
    data: XOR<guildUpdateManyMutationInput, guildUncheckedUpdateManyInput>
    /**
     * Filter which guilds to update
     */
    where?: guildWhereInput
    /**
     * Limit how many guilds to update.
     */
    limit?: number
  }

  /**
   * guild upsert
   */
  export type guildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * The filter to search for the guild to update in case it exists.
     */
    where: guildWhereUniqueInput
    /**
     * In case the guild found by the `where` argument doesn't exist, create a new guild with this data.
     */
    create: XOR<guildCreateInput, guildUncheckedCreateInput>
    /**
     * In case the guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<guildUpdateInput, guildUncheckedUpdateInput>
  }

  /**
   * guild delete
   */
  export type guildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
    /**
     * Filter which guild to delete.
     */
    where: guildWhereUniqueInput
  }

  /**
   * guild deleteMany
   */
  export type guildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guilds to delete
     */
    where?: guildWhereInput
    /**
     * Limit how many guilds to delete.
     */
    limit?: number
  }

  /**
   * guild without action
   */
  export type guildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guild
     */
    select?: guildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guild
     */
    omit?: guildOmit<ExtArgs> | null
  }


  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    member_id: number | null
    mission_id: number | null
  }

  export type MemberSumAggregateOutputType = {
    member_id: number | null
    mission_id: number | null
  }

  export type MemberMinAggregateOutputType = {
    member_id: number | null
    name: string | null
    Class: string | null
    Rank: string | null
    mission_id: number | null
  }

  export type MemberMaxAggregateOutputType = {
    member_id: number | null
    name: string | null
    Class: string | null
    Rank: string | null
    mission_id: number | null
  }

  export type MemberCountAggregateOutputType = {
    member_id: number
    name: number
    Class: number
    Rank: number
    mission_id: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    member_id?: true
    mission_id?: true
  }

  export type MemberSumAggregateInputType = {
    member_id?: true
    mission_id?: true
  }

  export type MemberMinAggregateInputType = {
    member_id?: true
    name?: true
    Class?: true
    Rank?: true
    mission_id?: true
  }

  export type MemberMaxAggregateInputType = {
    member_id?: true
    name?: true
    Class?: true
    Rank?: true
    mission_id?: true
  }

  export type MemberCountAggregateInputType = {
    member_id?: true
    name?: true
    Class?: true
    Rank?: true
    mission_id?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    member_id: number
    name: string | null
    Class: string | null
    Rank: string | null
    mission_id: number | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    name?: boolean
    Class?: boolean
    Rank?: boolean
    mission_id?: boolean
    quests?: boolean | member$questsArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type memberSelectScalar = {
    member_id?: boolean
    name?: boolean
    Class?: boolean
    Rank?: boolean
    mission_id?: boolean
  }

  export type memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "name" | "Class" | "Rank" | "mission_id", ExtArgs["result"]["member"]>
  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | member$questsArgs<ExtArgs>
  }

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      quests: Prisma.$questsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      name: string | null
      Class: string | null
      Rank: string | null
      mission_id: number | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const memberWithMember_idOnly = await prisma.member.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quests<T extends member$questsArgs<ExtArgs> = {}>(args?: Subset<T, member$questsArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */
  interface memberFieldRefs {
    readonly member_id: FieldRef<"member", 'Int'>
    readonly name: FieldRef<"member", 'String'>
    readonly Class: FieldRef<"member", 'String'>
    readonly Rank: FieldRef<"member", 'String'>
    readonly mission_id: FieldRef<"member", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data?: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * member.quests
   */
  export type member$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    where?: questsWhereInput
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model quests
   */

  export type AggregateQuests = {
    _count: QuestsCountAggregateOutputType | null
    _avg: QuestsAvgAggregateOutputType | null
    _sum: QuestsSumAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  export type QuestsAvgAggregateOutputType = {
    mission_id: number | null
    reward: number | null
  }

  export type QuestsSumAggregateOutputType = {
    mission_id: number | null
    reward: number | null
  }

  export type QuestsMinAggregateOutputType = {
    mission_id: number | null
    title: string | null
    details: string | null
    difficulty: string | null
    reward: number | null
    Start_Date: Date | null
    Completion_Date: Date | null
  }

  export type QuestsMaxAggregateOutputType = {
    mission_id: number | null
    title: string | null
    details: string | null
    difficulty: string | null
    reward: number | null
    Start_Date: Date | null
    Completion_Date: Date | null
  }

  export type QuestsCountAggregateOutputType = {
    mission_id: number
    title: number
    details: number
    difficulty: number
    reward: number
    Start_Date: number
    Completion_Date: number
    _all: number
  }


  export type QuestsAvgAggregateInputType = {
    mission_id?: true
    reward?: true
  }

  export type QuestsSumAggregateInputType = {
    mission_id?: true
    reward?: true
  }

  export type QuestsMinAggregateInputType = {
    mission_id?: true
    title?: true
    details?: true
    difficulty?: true
    reward?: true
    Start_Date?: true
    Completion_Date?: true
  }

  export type QuestsMaxAggregateInputType = {
    mission_id?: true
    title?: true
    details?: true
    difficulty?: true
    reward?: true
    Start_Date?: true
    Completion_Date?: true
  }

  export type QuestsCountAggregateInputType = {
    mission_id?: true
    title?: true
    details?: true
    difficulty?: true
    reward?: true
    Start_Date?: true
    Completion_Date?: true
    _all?: true
  }

  export type QuestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quests to aggregate.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quests
    **/
    _count?: true | QuestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestsMaxAggregateInputType
  }

  export type GetQuestsAggregateType<T extends QuestsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuests[P]>
      : GetScalarType<T[P], AggregateQuests[P]>
  }




  export type questsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questsWhereInput
    orderBy?: questsOrderByWithAggregationInput | questsOrderByWithAggregationInput[]
    by: QuestsScalarFieldEnum[] | QuestsScalarFieldEnum
    having?: questsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestsCountAggregateInputType | true
    _avg?: QuestsAvgAggregateInputType
    _sum?: QuestsSumAggregateInputType
    _min?: QuestsMinAggregateInputType
    _max?: QuestsMaxAggregateInputType
  }

  export type QuestsGroupByOutputType = {
    mission_id: number
    title: string | null
    details: string | null
    difficulty: string | null
    reward: number | null
    Start_Date: Date | null
    Completion_Date: Date | null
    _count: QuestsCountAggregateOutputType | null
    _avg: QuestsAvgAggregateOutputType | null
    _sum: QuestsSumAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  type GetQuestsGroupByPayload<T extends questsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestsGroupByOutputType[P]>
        }
      >
    >


  export type questsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mission_id?: boolean
    title?: boolean
    details?: boolean
    difficulty?: boolean
    reward?: boolean
    Start_Date?: boolean
    Completion_Date?: boolean
    member?: boolean | quests$memberArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quests"]>



  export type questsSelectScalar = {
    mission_id?: boolean
    title?: boolean
    details?: boolean
    difficulty?: boolean
    reward?: boolean
    Start_Date?: boolean
    Completion_Date?: boolean
  }

  export type questsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mission_id" | "title" | "details" | "difficulty" | "reward" | "Start_Date" | "Completion_Date", ExtArgs["result"]["quests"]>
  export type questsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | quests$memberArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quests"
    objects: {
      member: Prisma.$memberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mission_id: number
      title: string | null
      details: string | null
      difficulty: string | null
      reward: number | null
      Start_Date: Date | null
      Completion_Date: Date | null
    }, ExtArgs["result"]["quests"]>
    composites: {}
  }

  type questsGetPayload<S extends boolean | null | undefined | questsDefaultArgs> = $Result.GetResult<Prisma.$questsPayload, S>

  type questsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestsCountAggregateInputType | true
    }

  export interface questsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quests'], meta: { name: 'quests' } }
    /**
     * Find zero or one Quests that matches the filter.
     * @param {questsFindUniqueArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questsFindUniqueArgs>(args: SelectSubset<T, questsFindUniqueArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questsFindUniqueOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questsFindUniqueOrThrowArgs>(args: SelectSubset<T, questsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindFirstArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questsFindFirstArgs>(args?: SelectSubset<T, questsFindFirstArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindFirstOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questsFindFirstOrThrowArgs>(args?: SelectSubset<T, questsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quests.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quests.findMany({ take: 10 })
     * 
     * // Only select the `mission_id`
     * const questsWithMission_idOnly = await prisma.quests.findMany({ select: { mission_id: true } })
     * 
     */
    findMany<T extends questsFindManyArgs>(args?: SelectSubset<T, questsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quests.
     * @param {questsCreateArgs} args - Arguments to create a Quests.
     * @example
     * // Create one Quests
     * const Quests = await prisma.quests.create({
     *   data: {
     *     // ... data to create a Quests
     *   }
     * })
     * 
     */
    create<T extends questsCreateArgs>(args: SelectSubset<T, questsCreateArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {questsCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quests = await prisma.quests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questsCreateManyArgs>(args?: SelectSubset<T, questsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quests.
     * @param {questsDeleteArgs} args - Arguments to delete one Quests.
     * @example
     * // Delete one Quests
     * const Quests = await prisma.quests.delete({
     *   where: {
     *     // ... filter to delete one Quests
     *   }
     * })
     * 
     */
    delete<T extends questsDeleteArgs>(args: SelectSubset<T, questsDeleteArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quests.
     * @param {questsUpdateArgs} args - Arguments to update one Quests.
     * @example
     * // Update one Quests
     * const quests = await prisma.quests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questsUpdateArgs>(args: SelectSubset<T, questsUpdateArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {questsDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questsDeleteManyArgs>(args?: SelectSubset<T, questsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quests = await prisma.quests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questsUpdateManyArgs>(args: SelectSubset<T, questsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quests.
     * @param {questsUpsertArgs} args - Arguments to update or create a Quests.
     * @example
     * // Update or create a Quests
     * const quests = await prisma.quests.upsert({
     *   create: {
     *     // ... data to create a Quests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quests we want to update
     *   }
     * })
     */
    upsert<T extends questsUpsertArgs>(args: SelectSubset<T, questsUpsertArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quests.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends questsCountArgs>(
      args?: Subset<T, questsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestsAggregateArgs>(args: Subset<T, QuestsAggregateArgs>): Prisma.PrismaPromise<GetQuestsAggregateType<T>>

    /**
     * Group by Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questsGroupByArgs['orderBy'] }
        : { orderBy?: questsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quests model
   */
  readonly fields: questsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends quests$memberArgs<ExtArgs> = {}>(args?: Subset<T, quests$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the quests model
   */
  interface questsFieldRefs {
    readonly mission_id: FieldRef<"quests", 'Int'>
    readonly title: FieldRef<"quests", 'String'>
    readonly details: FieldRef<"quests", 'String'>
    readonly difficulty: FieldRef<"quests", 'String'>
    readonly reward: FieldRef<"quests", 'Int'>
    readonly Start_Date: FieldRef<"quests", 'DateTime'>
    readonly Completion_Date: FieldRef<"quests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quests findUnique
   */
  export type questsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests findUniqueOrThrow
   */
  export type questsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests findFirst
   */
  export type questsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests findFirstOrThrow
   */
  export type questsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests findMany
   */
  export type questsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests create
   */
  export type questsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The data needed to create a quests.
     */
    data?: XOR<questsCreateInput, questsUncheckedCreateInput>
  }

  /**
   * quests createMany
   */
  export type questsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quests.
     */
    data: questsCreateManyInput | questsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quests update
   */
  export type questsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The data needed to update a quests.
     */
    data: XOR<questsUpdateInput, questsUncheckedUpdateInput>
    /**
     * Choose, which quests to update.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests updateMany
   */
  export type questsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quests.
     */
    data: XOR<questsUpdateManyMutationInput, questsUncheckedUpdateManyInput>
    /**
     * Filter which quests to update
     */
    where?: questsWhereInput
    /**
     * Limit how many quests to update.
     */
    limit?: number
  }

  /**
   * quests upsert
   */
  export type questsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The filter to search for the quests to update in case it exists.
     */
    where: questsWhereUniqueInput
    /**
     * In case the quests found by the `where` argument doesn't exist, create a new quests with this data.
     */
    create: XOR<questsCreateInput, questsUncheckedCreateInput>
    /**
     * In case the quests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questsUpdateInput, questsUncheckedUpdateInput>
  }

  /**
   * quests delete
   */
  export type questsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter which quests to delete.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests deleteMany
   */
  export type questsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quests to delete
     */
    where?: questsWhereInput
    /**
     * Limit how many quests to delete.
     */
    limit?: number
  }

  /**
   * quests.member
   */
  export type quests$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    cursor?: memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * quests without action
   */
  export type questsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Role: 'Role',
    Salary: 'Salary'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    treasury: 'treasury',
    guild_id: 'guild_id',
    guild_name: 'guild_name'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    member_id: 'member_id',
    name: 'name',
    Class: 'Class',
    Rank: 'Rank',
    mission_id: 'mission_id'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const QuestsScalarFieldEnum: {
    mission_id: 'mission_id',
    title: 'title',
    details: 'details',
    difficulty: 'difficulty',
    reward: 'reward',
    Start_Date: 'Start_Date',
    Completion_Date: 'Completion_Date'
  };

  export type QuestsScalarFieldEnum = (typeof QuestsScalarFieldEnum)[keyof typeof QuestsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const employeesOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Role: 'Role'
  };

  export type employeesOrderByRelevanceFieldEnum = (typeof employeesOrderByRelevanceFieldEnum)[keyof typeof employeesOrderByRelevanceFieldEnum]


  export const guildOrderByRelevanceFieldEnum: {
    guild_name: 'guild_name'
  };

  export type guildOrderByRelevanceFieldEnum = (typeof guildOrderByRelevanceFieldEnum)[keyof typeof guildOrderByRelevanceFieldEnum]


  export const memberOrderByRelevanceFieldEnum: {
    name: 'name',
    Class: 'Class',
    Rank: 'Rank'
  };

  export type memberOrderByRelevanceFieldEnum = (typeof memberOrderByRelevanceFieldEnum)[keyof typeof memberOrderByRelevanceFieldEnum]


  export const questsOrderByRelevanceFieldEnum: {
    title: 'title',
    details: 'details',
    difficulty: 'difficulty'
  };

  export type questsOrderByRelevanceFieldEnum = (typeof questsOrderByRelevanceFieldEnum)[keyof typeof questsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    id?: IntFilter<"employees"> | number
    Name?: StringNullableFilter<"employees"> | string | null
    Role?: StringNullableFilter<"employees"> | string | null
    Salary?: IntNullableFilter<"employees"> | number | null
  }

  export type employeesOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Salary?: SortOrderInput | SortOrder
    _relevance?: employeesOrderByRelevanceInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    Name?: StringNullableFilter<"employees"> | string | null
    Role?: StringNullableFilter<"employees"> | string | null
    Salary?: IntNullableFilter<"employees"> | number | null
  }, "id">

  export type employeesOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Salary?: SortOrderInput | SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employees"> | number
    Name?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Role?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Salary?: IntNullableWithAggregatesFilter<"employees"> | number | null
  }

  export type guildWhereInput = {
    AND?: guildWhereInput | guildWhereInput[]
    OR?: guildWhereInput[]
    NOT?: guildWhereInput | guildWhereInput[]
    treasury?: BigIntNullableFilter<"guild"> | bigint | number | null
    guild_id?: IntFilter<"guild"> | number
    guild_name?: StringNullableFilter<"guild"> | string | null
  }

  export type guildOrderByWithRelationInput = {
    treasury?: SortOrderInput | SortOrder
    guild_id?: SortOrder
    guild_name?: SortOrderInput | SortOrder
    _relevance?: guildOrderByRelevanceInput
  }

  export type guildWhereUniqueInput = Prisma.AtLeast<{
    guild_id?: number
    AND?: guildWhereInput | guildWhereInput[]
    OR?: guildWhereInput[]
    NOT?: guildWhereInput | guildWhereInput[]
    treasury?: BigIntNullableFilter<"guild"> | bigint | number | null
    guild_name?: StringNullableFilter<"guild"> | string | null
  }, "guild_id">

  export type guildOrderByWithAggregationInput = {
    treasury?: SortOrderInput | SortOrder
    guild_id?: SortOrder
    guild_name?: SortOrderInput | SortOrder
    _count?: guildCountOrderByAggregateInput
    _avg?: guildAvgOrderByAggregateInput
    _max?: guildMaxOrderByAggregateInput
    _min?: guildMinOrderByAggregateInput
    _sum?: guildSumOrderByAggregateInput
  }

  export type guildScalarWhereWithAggregatesInput = {
    AND?: guildScalarWhereWithAggregatesInput | guildScalarWhereWithAggregatesInput[]
    OR?: guildScalarWhereWithAggregatesInput[]
    NOT?: guildScalarWhereWithAggregatesInput | guildScalarWhereWithAggregatesInput[]
    treasury?: BigIntNullableWithAggregatesFilter<"guild"> | bigint | number | null
    guild_id?: IntWithAggregatesFilter<"guild"> | number
    guild_name?: StringNullableWithAggregatesFilter<"guild"> | string | null
  }

  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    member_id?: IntFilter<"member"> | number
    name?: StringNullableFilter<"member"> | string | null
    Class?: StringNullableFilter<"member"> | string | null
    Rank?: StringNullableFilter<"member"> | string | null
    mission_id?: IntNullableFilter<"member"> | number | null
    quests?: XOR<QuestsNullableScalarRelationFilter, questsWhereInput> | null
  }

  export type memberOrderByWithRelationInput = {
    member_id?: SortOrder
    name?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    Rank?: SortOrderInput | SortOrder
    mission_id?: SortOrderInput | SortOrder
    quests?: questsOrderByWithRelationInput
    _relevance?: memberOrderByRelevanceInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    name?: StringNullableFilter<"member"> | string | null
    Class?: StringNullableFilter<"member"> | string | null
    Rank?: StringNullableFilter<"member"> | string | null
    mission_id?: IntNullableFilter<"member"> | number | null
    quests?: XOR<QuestsNullableScalarRelationFilter, questsWhereInput> | null
  }, "member_id">

  export type memberOrderByWithAggregationInput = {
    member_id?: SortOrder
    name?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    Rank?: SortOrderInput | SortOrder
    mission_id?: SortOrderInput | SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"member"> | number
    name?: StringNullableWithAggregatesFilter<"member"> | string | null
    Class?: StringNullableWithAggregatesFilter<"member"> | string | null
    Rank?: StringNullableWithAggregatesFilter<"member"> | string | null
    mission_id?: IntNullableWithAggregatesFilter<"member"> | number | null
  }

  export type questsWhereInput = {
    AND?: questsWhereInput | questsWhereInput[]
    OR?: questsWhereInput[]
    NOT?: questsWhereInput | questsWhereInput[]
    mission_id?: IntFilter<"quests"> | number
    title?: StringNullableFilter<"quests"> | string | null
    details?: StringNullableFilter<"quests"> | string | null
    difficulty?: StringNullableFilter<"quests"> | string | null
    reward?: IntNullableFilter<"quests"> | number | null
    Start_Date?: DateTimeNullableFilter<"quests"> | Date | string | null
    Completion_Date?: DateTimeNullableFilter<"quests"> | Date | string | null
    member?: MemberListRelationFilter
  }

  export type questsOrderByWithRelationInput = {
    mission_id?: SortOrder
    title?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    reward?: SortOrderInput | SortOrder
    Start_Date?: SortOrderInput | SortOrder
    Completion_Date?: SortOrderInput | SortOrder
    member?: memberOrderByRelationAggregateInput
    _relevance?: questsOrderByRelevanceInput
  }

  export type questsWhereUniqueInput = Prisma.AtLeast<{
    mission_id?: number
    AND?: questsWhereInput | questsWhereInput[]
    OR?: questsWhereInput[]
    NOT?: questsWhereInput | questsWhereInput[]
    title?: StringNullableFilter<"quests"> | string | null
    details?: StringNullableFilter<"quests"> | string | null
    difficulty?: StringNullableFilter<"quests"> | string | null
    reward?: IntNullableFilter<"quests"> | number | null
    Start_Date?: DateTimeNullableFilter<"quests"> | Date | string | null
    Completion_Date?: DateTimeNullableFilter<"quests"> | Date | string | null
    member?: MemberListRelationFilter
  }, "mission_id">

  export type questsOrderByWithAggregationInput = {
    mission_id?: SortOrder
    title?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    reward?: SortOrderInput | SortOrder
    Start_Date?: SortOrderInput | SortOrder
    Completion_Date?: SortOrderInput | SortOrder
    _count?: questsCountOrderByAggregateInput
    _avg?: questsAvgOrderByAggregateInput
    _max?: questsMaxOrderByAggregateInput
    _min?: questsMinOrderByAggregateInput
    _sum?: questsSumOrderByAggregateInput
  }

  export type questsScalarWhereWithAggregatesInput = {
    AND?: questsScalarWhereWithAggregatesInput | questsScalarWhereWithAggregatesInput[]
    OR?: questsScalarWhereWithAggregatesInput[]
    NOT?: questsScalarWhereWithAggregatesInput | questsScalarWhereWithAggregatesInput[]
    mission_id?: IntWithAggregatesFilter<"quests"> | number
    title?: StringNullableWithAggregatesFilter<"quests"> | string | null
    details?: StringNullableWithAggregatesFilter<"quests"> | string | null
    difficulty?: StringNullableWithAggregatesFilter<"quests"> | string | null
    reward?: IntNullableWithAggregatesFilter<"quests"> | number | null
    Start_Date?: DateTimeNullableWithAggregatesFilter<"quests"> | Date | string | null
    Completion_Date?: DateTimeNullableWithAggregatesFilter<"quests"> | Date | string | null
  }

  export type employeesCreateInput = {
    Name?: string | null
    Role?: string | null
    Salary?: number | null
  }

  export type employeesUncheckedCreateInput = {
    id?: number
    Name?: string | null
    Role?: string | null
    Salary?: number | null
  }

  export type employeesUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type employeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type employeesCreateManyInput = {
    id?: number
    Name?: string | null
    Role?: string | null
    Salary?: number | null
  }

  export type employeesUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type employeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type guildCreateInput = {
    treasury?: bigint | number | null
    guild_name?: string | null
  }

  export type guildUncheckedCreateInput = {
    treasury?: bigint | number | null
    guild_id?: number
    guild_name?: string | null
  }

  export type guildUpdateInput = {
    treasury?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    guild_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type guildUncheckedUpdateInput = {
    treasury?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    guild_id?: IntFieldUpdateOperationsInput | number
    guild_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type guildCreateManyInput = {
    treasury?: bigint | number | null
    guild_id?: number
    guild_name?: string | null
  }

  export type guildUpdateManyMutationInput = {
    treasury?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    guild_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type guildUncheckedUpdateManyInput = {
    treasury?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    guild_id?: IntFieldUpdateOperationsInput | number
    guild_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberCreateInput = {
    name?: string | null
    Class?: string | null
    Rank?: string | null
    quests?: questsCreateNestedOneWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    member_id?: number
    name?: string | null
    Class?: string | null
    Rank?: string | null
    mission_id?: number | null
  }

  export type memberUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: questsUpdateOneWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
    mission_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type memberCreateManyInput = {
    member_id?: number
    name?: string | null
    Class?: string | null
    Rank?: string | null
    mission_id?: number | null
  }

  export type memberUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
    mission_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type questsCreateInput = {
    title?: string | null
    details?: string | null
    difficulty?: string | null
    reward?: number | null
    Start_Date?: Date | string | null
    Completion_Date?: Date | string | null
    member?: memberCreateNestedManyWithoutQuestsInput
  }

  export type questsUncheckedCreateInput = {
    mission_id?: number
    title?: string | null
    details?: string | null
    difficulty?: string | null
    reward?: number | null
    Start_Date?: Date | string | null
    Completion_Date?: Date | string | null
    member?: memberUncheckedCreateNestedManyWithoutQuestsInput
  }

  export type questsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateManyWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUncheckedUpdateManyWithoutQuestsNestedInput
  }

  export type questsCreateManyInput = {
    mission_id?: number
    title?: string | null
    details?: string | null
    difficulty?: string | null
    reward?: number | null
    Start_Date?: Date | string | null
    Completion_Date?: Date | string | null
  }

  export type questsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questsUncheckedUpdateManyInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type employeesOrderByRelevanceInput = {
    fields: employeesOrderByRelevanceFieldEnum | employeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type employeesCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Role?: SortOrder
    Salary?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    id?: SortOrder
    Salary?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Role?: SortOrder
    Salary?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Role?: SortOrder
    Salary?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    id?: SortOrder
    Salary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type guildOrderByRelevanceInput = {
    fields: guildOrderByRelevanceFieldEnum | guildOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type guildCountOrderByAggregateInput = {
    treasury?: SortOrder
    guild_id?: SortOrder
    guild_name?: SortOrder
  }

  export type guildAvgOrderByAggregateInput = {
    treasury?: SortOrder
    guild_id?: SortOrder
  }

  export type guildMaxOrderByAggregateInput = {
    treasury?: SortOrder
    guild_id?: SortOrder
    guild_name?: SortOrder
  }

  export type guildMinOrderByAggregateInput = {
    treasury?: SortOrder
    guild_id?: SortOrder
    guild_name?: SortOrder
  }

  export type guildSumOrderByAggregateInput = {
    treasury?: SortOrder
    guild_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type QuestsNullableScalarRelationFilter = {
    is?: questsWhereInput | null
    isNot?: questsWhereInput | null
  }

  export type memberOrderByRelevanceInput = {
    fields: memberOrderByRelevanceFieldEnum | memberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type memberCountOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    Class?: SortOrder
    Rank?: SortOrder
    mission_id?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    member_id?: SortOrder
    mission_id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    Class?: SortOrder
    Rank?: SortOrder
    mission_id?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    member_id?: SortOrder
    name?: SortOrder
    Class?: SortOrder
    Rank?: SortOrder
    mission_id?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    member_id?: SortOrder
    mission_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MemberListRelationFilter = {
    every?: memberWhereInput
    some?: memberWhereInput
    none?: memberWhereInput
  }

  export type memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questsOrderByRelevanceInput = {
    fields: questsOrderByRelevanceFieldEnum | questsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questsCountOrderByAggregateInput = {
    mission_id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    difficulty?: SortOrder
    reward?: SortOrder
    Start_Date?: SortOrder
    Completion_Date?: SortOrder
  }

  export type questsAvgOrderByAggregateInput = {
    mission_id?: SortOrder
    reward?: SortOrder
  }

  export type questsMaxOrderByAggregateInput = {
    mission_id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    difficulty?: SortOrder
    reward?: SortOrder
    Start_Date?: SortOrder
    Completion_Date?: SortOrder
  }

  export type questsMinOrderByAggregateInput = {
    mission_id?: SortOrder
    title?: SortOrder
    details?: SortOrder
    difficulty?: SortOrder
    reward?: SortOrder
    Start_Date?: SortOrder
    Completion_Date?: SortOrder
  }

  export type questsSumOrderByAggregateInput = {
    mission_id?: SortOrder
    reward?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type questsCreateNestedOneWithoutMemberInput = {
    create?: XOR<questsCreateWithoutMemberInput, questsUncheckedCreateWithoutMemberInput>
    connectOrCreate?: questsCreateOrConnectWithoutMemberInput
    connect?: questsWhereUniqueInput
  }

  export type questsUpdateOneWithoutMemberNestedInput = {
    create?: XOR<questsCreateWithoutMemberInput, questsUncheckedCreateWithoutMemberInput>
    connectOrCreate?: questsCreateOrConnectWithoutMemberInput
    upsert?: questsUpsertWithoutMemberInput
    disconnect?: questsWhereInput | boolean
    delete?: questsWhereInput | boolean
    connect?: questsWhereUniqueInput
    update?: XOR<XOR<questsUpdateToOneWithWhereWithoutMemberInput, questsUpdateWithoutMemberInput>, questsUncheckedUpdateWithoutMemberInput>
  }

  export type memberCreateNestedManyWithoutQuestsInput = {
    create?: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput> | memberCreateWithoutQuestsInput[] | memberUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: memberCreateOrConnectWithoutQuestsInput | memberCreateOrConnectWithoutQuestsInput[]
    createMany?: memberCreateManyQuestsInputEnvelope
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
  }

  export type memberUncheckedCreateNestedManyWithoutQuestsInput = {
    create?: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput> | memberCreateWithoutQuestsInput[] | memberUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: memberCreateOrConnectWithoutQuestsInput | memberCreateOrConnectWithoutQuestsInput[]
    createMany?: memberCreateManyQuestsInputEnvelope
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type memberUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput> | memberCreateWithoutQuestsInput[] | memberUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: memberCreateOrConnectWithoutQuestsInput | memberCreateOrConnectWithoutQuestsInput[]
    upsert?: memberUpsertWithWhereUniqueWithoutQuestsInput | memberUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: memberCreateManyQuestsInputEnvelope
    set?: memberWhereUniqueInput | memberWhereUniqueInput[]
    disconnect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    delete?: memberWhereUniqueInput | memberWhereUniqueInput[]
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    update?: memberUpdateWithWhereUniqueWithoutQuestsInput | memberUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: memberUpdateManyWithWhereWithoutQuestsInput | memberUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: memberScalarWhereInput | memberScalarWhereInput[]
  }

  export type memberUncheckedUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput> | memberCreateWithoutQuestsInput[] | memberUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: memberCreateOrConnectWithoutQuestsInput | memberCreateOrConnectWithoutQuestsInput[]
    upsert?: memberUpsertWithWhereUniqueWithoutQuestsInput | memberUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: memberCreateManyQuestsInputEnvelope
    set?: memberWhereUniqueInput | memberWhereUniqueInput[]
    disconnect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    delete?: memberWhereUniqueInput | memberWhereUniqueInput[]
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    update?: memberUpdateWithWhereUniqueWithoutQuestsInput | memberUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: memberUpdateManyWithWhereWithoutQuestsInput | memberUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: memberScalarWhereInput | memberScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type questsCreateWithoutMemberInput = {
    title?: string | null
    details?: string | null
    difficulty?: string | null
    reward?: number | null
    Start_Date?: Date | string | null
    Completion_Date?: Date | string | null
  }

  export type questsUncheckedCreateWithoutMemberInput = {
    mission_id?: number
    title?: string | null
    details?: string | null
    difficulty?: string | null
    reward?: number | null
    Start_Date?: Date | string | null
    Completion_Date?: Date | string | null
  }

  export type questsCreateOrConnectWithoutMemberInput = {
    where: questsWhereUniqueInput
    create: XOR<questsCreateWithoutMemberInput, questsUncheckedCreateWithoutMemberInput>
  }

  export type questsUpsertWithoutMemberInput = {
    update: XOR<questsUpdateWithoutMemberInput, questsUncheckedUpdateWithoutMemberInput>
    create: XOR<questsCreateWithoutMemberInput, questsUncheckedCreateWithoutMemberInput>
    where?: questsWhereInput
  }

  export type questsUpdateToOneWithWhereWithoutMemberInput = {
    where?: questsWhereInput
    data: XOR<questsUpdateWithoutMemberInput, questsUncheckedUpdateWithoutMemberInput>
  }

  export type questsUpdateWithoutMemberInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questsUncheckedUpdateWithoutMemberInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    reward?: NullableIntFieldUpdateOperationsInput | number | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Completion_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberCreateWithoutQuestsInput = {
    name?: string | null
    Class?: string | null
    Rank?: string | null
  }

  export type memberUncheckedCreateWithoutQuestsInput = {
    member_id?: number
    name?: string | null
    Class?: string | null
    Rank?: string | null
  }

  export type memberCreateOrConnectWithoutQuestsInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput>
  }

  export type memberCreateManyQuestsInputEnvelope = {
    data: memberCreateManyQuestsInput | memberCreateManyQuestsInput[]
    skipDuplicates?: boolean
  }

  export type memberUpsertWithWhereUniqueWithoutQuestsInput = {
    where: memberWhereUniqueInput
    update: XOR<memberUpdateWithoutQuestsInput, memberUncheckedUpdateWithoutQuestsInput>
    create: XOR<memberCreateWithoutQuestsInput, memberUncheckedCreateWithoutQuestsInput>
  }

  export type memberUpdateWithWhereUniqueWithoutQuestsInput = {
    where: memberWhereUniqueInput
    data: XOR<memberUpdateWithoutQuestsInput, memberUncheckedUpdateWithoutQuestsInput>
  }

  export type memberUpdateManyWithWhereWithoutQuestsInput = {
    where: memberScalarWhereInput
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyWithoutQuestsInput>
  }

  export type memberScalarWhereInput = {
    AND?: memberScalarWhereInput | memberScalarWhereInput[]
    OR?: memberScalarWhereInput[]
    NOT?: memberScalarWhereInput | memberScalarWhereInput[]
    member_id?: IntFilter<"member"> | number
    name?: StringNullableFilter<"member"> | string | null
    Class?: StringNullableFilter<"member"> | string | null
    Rank?: StringNullableFilter<"member"> | string | null
    mission_id?: IntNullableFilter<"member"> | number | null
  }

  export type memberCreateManyQuestsInput = {
    member_id?: number
    name?: string | null
    Class?: string | null
    Rank?: string | null
  }

  export type memberUpdateWithoutQuestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberUncheckedUpdateWithoutQuestsInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memberUncheckedUpdateManyWithoutQuestsInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Rank?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}