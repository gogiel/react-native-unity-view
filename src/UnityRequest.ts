import { IUnityMessage, UnityMessageType } from "./UnityMessage";

export interface IUnityRequest<TType extends number = UnityMessageType, TData = any, TResponse = any> extends IUnityMessage<TType, TData> {
}
