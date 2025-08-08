const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BACKUP_DIR = path.join(__dirname, 'backups');
const DATABASE_FILE = path.join(__dirname, 'database.sql');
const SCHEMA_FILE = path.join(__dirname, 'schema_update.sql');
const LOG_FILE = path.join(__dirname, 'schema_update.log');

async function createBackup() {
}

async function updateSchema() {
}

(async () => {
  const backupSuccess = await createBackup();
  if (!backupSuccess) process.exit(1);

  const updateSuccess = await updateSchema();
  if (!updateSuccess) process.exit(1);
})();
