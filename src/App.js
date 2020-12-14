import Routes from './routes';

import { UserProvider } from './context/UserContext';
import { TriviaProvider } from './context/TriviaContext';

import './assets/styles/global.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#079B8D',
    },
    secondary: {
      main: '#E82823',
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TriviaProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </TriviaProvider>
    </ThemeProvider>
  );
}

export default App;
