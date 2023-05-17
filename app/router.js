import EmberRouter from '@ember/routing/router';
import config from 'str-handler/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('strcount', { path: '/' });
  this.route('nomes');
  this.route('not-found', { path: '/*path' });
});
