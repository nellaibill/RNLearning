import { View, Text } from 'react-native'

import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        //logErrorToMyService(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <View style={{ marginLeft: 20, marginRight: 20, marginTop: 50 }}><Text>App Crashed .. </Text></View>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;