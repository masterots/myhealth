'use strict';

import Relay from 'react-relay';

export default class AppRoute extends Relay.Route {
  constructor() {
    super();
  }

  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
  static routeName = 'AppRoute';
}