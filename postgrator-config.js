// require('dotenv').config();

// module.exports = {
//   "migrationDirectory": "migrations",
//   "driver": "pg",
//   "host": process.env.MIGRATION_DB_HOST,
//   "port": process.env.MIGRATION_DB_PORT,
//   "database": process.env.MIGRATION_DB_NAME,
//   "username": process.env.MIGRATION_DB_USER,
//   "password": process.env.MIGRATION_DB_PASS
// }
require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL,
    "sslmode": "allow",
  // "ssl": !!process.env.SSL,
  "validateChecksums": false, // Set to false to skip validation,
}