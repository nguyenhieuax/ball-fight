import { Navigation } from 'react-native-navigation';
import { resgisterScreen } from './src/scenes'
// import Login from './src/scenes/auth/Login'

resgisterScreen();

export const startApp = () => {

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                stack: {
                    id: 'appStack',
                    children: [
                        {
                            component: {
                                name: 'signin'
                            }
                        }
                    ]
                }
            }

        })
    })
}

