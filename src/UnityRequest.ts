export interface IUnityRequest<TType extends number, TData = any, TResponse = any> {
    readonly id: string;
    readonly type: TType;
    readonly data?: TData;
}
