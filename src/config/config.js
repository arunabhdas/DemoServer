module.exports = {
  development: {
    database: 'wilson_dev_db',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: '5432',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
