import * as React from "react";
import { requireNativeComponent, ViewProps, View } from 'react-native';
import { UnityMessageHandler } from "./UnityMessageHandler";
import { UnityModule } from "./UnityModule";

const { useState, useEffect } = React;

export interface UnityViewProps extends ViewProps {
    /**
     * Receive plain text message from unity.
     */
    onMessage?: (message: string) => void;

    /**
    * Receive JSON message or request from unity.
    */
    onUnityMessage?: (handler: UnityMessageHandler) => void;
    children?: React.ReactNode[];
}

const NativeUnityView = requireNativeComponent<UnityViewProps>('UnityView');

const UnityView = ({ onUnityMessage, onMessage, children, ...props }: UnityViewProps) => {
    const [unitySubscription, setUnitySubscription] = useState<number | null>(null);
    const [stringSubscription, setStringSubscription] = useState<number | null>(null);

    useEffect(() => {
        onUnityMessage && setUnitySubscription(UnityModule.addUnityMessageListener(onUnityMessage));
        onMessage && setStringSubscription(UnityModule.addStringMessageListener(onMessage));

        return () => {
            unitySubscription && UnityModule.removeMessageListener(unitySubscription);
            stringSubscription && UnityModule.removeMessageListener(stringSubscription);
            UnityModule.clear();
        }
    }, []);

    return (
        <View {...props}>
            <NativeUnityView
                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
            >
            </NativeUnityView>
            {children}
        </View>
    );
}

export default UnityView;
