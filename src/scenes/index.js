import  SignIn from './auth/SignIn';
import CreateTeam from './CreateTeam';
import CreateLeague from './CreateLeague';
import JoinTeam from './JoinTeam';
import MainMenu from './MainMenu';
import { Navigation } from 'react-native-navigation'

// export default {
//   login
// }

export const resgisterScreen = () => {

  Navigation.registerComponent('signin', () => SignIn);
  Navigation.registerComponent('createteam', () => CreateTeam);
  Navigation.registerComponent('createleague', () => CreateLeague);
  Navigation.registerComponent('jointeam', () => JoinTeam);
  Navigation.registerComponent('mainmenu', () => MainMenu);

} 


  