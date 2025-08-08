# Technical Test – Jr Backend / DevOps

### Context
In this test, you will simulate a real DevOps task before applying changes to a production database:  
**making a backup and then updating the schema**.  
Everything should run **locally**

---

## What you will receive

You will be given the **starter template file named `template.js`** that you must complete

---

### Objective
Create a script using **any scripting language you prefer** (Node.js, Python, Bash, etc.) that automatically performs the following flow:

1. **Backup the database**
   - Read the `database.sql` file (simulated database dump).
   - Compress it into `.zip` format.
   - Save it in the `/backups` folder with the name:
     ```
     backup_YYYYMMDD_HHMM.sql.zip
     ```
   - Display in console:
     ```
     Backup generated: backups/backup_20250808_1030.sql.zip (15 KB)
     ```

2. **Update the database schema** (choose one of the two approaches below)

   **Option A: Using a local MySQL database**  
   - Connect to a local **MySQL** database.  
   - Read and execute the statements in the `schema_update.sql` file.  
   - Save a log in `schema_update.log`:  
     ```
     [YYYY-MM-DD HH:MM:SS] Applied schema_update.sql - SUCCESS
     ```  
     or in case of error:  
     ```
     [YYYY-MM-DD HH:MM:SS] Applied schema_update.sql - ERROR: <message>
     ```  

   **Option B: Fully simulated (no real database)**  
   - Read the file `schema_update.sql` (plain text with SQL commands).  
   - Simulate applying each SQL statement by:  
     - Parsing the file line by line or statement by statement.  
     - Writing a log entry in `schema_update.log` for each statement:  
       ```
       [YYYY-MM-DD HH:MM:SS] Applied: <SQL statement>
       ```  
     - If the file is empty or missing, write an error entry instead.  

3. **Flow rules**
   - If the **backup fails**, **do not** execute the schema update.
   - If both steps succeed, display:
     ```
     Backup: OK
     Schema update: OK
     ```

---

### Additional Requirements  
- Handle errors gracefully and log them properly.  
- Use timestamps in all log entries.  
- Use local files only; **no external or cloud services required**.  
- Optionally, use environment variables for configurable paths.

---

### Provided files  
- /database.sql # Simulated database dump file (plain text)
- /schema_update.sql # SQL statements for schema updates (plain text)
- /backups/ # Directory to save backup files
- template.js # Template for the required code

---

### Evaluation Criteria  
- Correct backup creation and compression.  
- Proper schema update execution or simulation with accurate logging.  
- Clean and readable code with error handling.  
- Clear console output reflecting success or failure.  
- Proper timestamp formatting and file naming.

