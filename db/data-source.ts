import { DataSource, DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "boiler",
  password: "boiler",
  database: "boiler-plate",
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;