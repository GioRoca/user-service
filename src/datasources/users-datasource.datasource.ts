import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const configJS = require('../../config.js');

const config = {
  name: 'usersDatasource',
  connector: 'postgresql',
  url: '',
  host: configJS.POSTGRESQL.HOST,
  port: configJS.POSTGRESQL.PORT,
  user: configJS.POSTGRESQL.USER,
  password: configJS.POSTGRESQL.PASSWORD,
  database: configJS.POSTGRESQL.DB,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersDatasourceDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'usersDatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.usersDatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
