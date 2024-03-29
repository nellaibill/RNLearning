import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
       // console.log('Authorization status:', authStatus);
        getFCMToken();
    }
}
const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    //console.log("Old Fcm Token ", fcmToken);
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                //console.log("New Fcm Token ", fcmToken);
                await AsyncStorage.setItem(' ', fcmToken);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const NotificationServices = async() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
    messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notificration,
                );
            }
        });
}