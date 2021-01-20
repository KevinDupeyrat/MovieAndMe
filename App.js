/**
 * Point d'entrée de l'application.
 * L'initialisation avec Redux ce fait avec le composent
 * Provider qui prend une props de type Store.
 * C'est lui qui permet de donner accès à toute l'application
 * au Store Redux
 */

import React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './redux/store/configureStore'

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
