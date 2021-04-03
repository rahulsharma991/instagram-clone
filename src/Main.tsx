import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {theme} from './Utilities/theme';

function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

export default Main;
