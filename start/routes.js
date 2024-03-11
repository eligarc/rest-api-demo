'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
  Route.get('proyectos', 'ProyectoController.index');
  Route.post('proyectos', 'ProyectoController.create');
  Route.delete('proyectos/:id', 'ProyectoController.destroy');
  Route.patch('proyectos/:id', 'ProyectoController.update');

}).prefix('api/v1').middleware('auth');

Route.group(() => {
  Route.post('usuarios/login', 'UserController.login');
  Route.post('usuarios/registro', 'UserController.store');
}).prefix('api/v1')

Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store');
}).prefix('api/v2');
