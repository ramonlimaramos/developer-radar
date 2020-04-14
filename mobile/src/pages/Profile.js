import React from 'react';
import { WebView } from 'react-native-webview';

export default function Profile({ route, navigation }) {
    const { github_username } = route.params;

    return (
        <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${github_username}` }} />
    );
}