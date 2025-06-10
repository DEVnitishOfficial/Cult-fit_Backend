## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/DEVnitishOfficial/ExpressTypescriptTemplate.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable


5. Start the express server

```
npm run dev
```
---

# ⚙️ CONFIGURING THE ORM/ODM

---

### ✅ To configure the ORM install the following npm packages:

---

### 1. Install Sequelize (the ORM library)

```bash
npm i sequelize
```

---

### 2. Install MySQL driver library (sequelize uses it internally)

```bash
npm i mysql2
```

---

### 3. Install Sequelize CLI tools

*(generate sequelize related files using sequelize CLI tools)*

```bash
npm install -D sequelize-cli
```

---

## 🚀 To start executing Sequelize, run the following command:

> Starts executing sequelize in the command line.

🛠️ Execute the below command **in `src`** because we have configured all our folder structure inside the `src`.

```bash
npx sequelize-cli init
```

---

### This will create the following folders:

| Folder       | Description                                                                   |
| ------------ | ----------------------------------------------------------------------------- |
| `config`     | 👉 contains the config file, which tells CLI how to connect with the database |
| `models`     | 👉 contains all models for your project                                       |
| `migrations` | 👉 contains all migration files                                               |
| `seeders`    | 👉 contains all seed files                                                    |

---

## 🧩 **Config Explain**

In the `config` folder, there's a `config.json` file. Inside that, there are **three different levels of database connection**:

---

### 1. **Development**

➡️ In order to develop some feature of the application, we have to write some code so writing that code we prefer in development database.

---

### 2. **Test**

➡️ After writing the code, we test that code. So to test that code, we use test database.
➡️ We use test and development database for development and test because if we try it in the production database then if we did any mistake during development, it will impact business.
➡️ Impacting business means loss of money, that we never want.

---

### 3. **Production**

➡️ After successful development and testing of the written code, we push that code in production and then we use the production database.

---

### 4. `"dialect": "mysql"`

➡️ Here through the `dialect` keyword we are saying to Sequelize that we have to connect with the MySQL database, so whatever protocol needs to be enabled in order to connect with the MySQL database, just enable that.
➡️ Because through Sequelize, we not only connect with MySQL, but also with other databases like PostgreSQL, SQLite, Oracle, MariaDB and others, so we have to enable specific protocol.

💡 Or roughly we can say it (`dialect`) **mentions the driver** that from which database we have to connect.

🛠️ **Driver is a raw code written which is used by all ORMs including Sequelize to connect with a particular database.**

---

## 📁 **Explain `models`** (makes interoperable between js/ts and mysql)

Inside the `models` folder, we write the representation (in the form of classes or interface) of the MySQL table in JavaScript/TypeScript.

➡️ Because JavaScript doesn't know the SQL table, so here models will help us to interact with MySQL database by writing the JS-like code.

---

## 🌱 **Explain `seeders`** (change the data inside the table)

Inside the `seeders` folder, we put the **dummy/seed data** of our database.

➡️ So that whenever a new developer comes, they can understand the database or tables easily with that dummy data.

---

## 🏗️ **Explain `migrations`** (change the structure of the database)

Migration folder is used to create different **versions of the database**.

📘 Example:

> Suppose the Airbnb hotel service management system in which initially there were only two columns in a table — `name` and `address`.
> Now, as the product grows and the requirement also grows, we need to add a `STATUS` table as well.
> So, instead of updating the table directly, we **manage the versions** of the database so that we can move from **V1 → V2 → V3** and also can revert back if needed.

---

## 🧹 Deleting all the folders created by Sequelize CLI and organizing inside `src` folder — But Why???

🔐 By default, it creates `config.json` file inside which all the database credentials are present and in the **production-grade application**, it’s a **security compromise**.

✅ That’s why we:

* Delete all the folders
* Create `config.ts` file in `config` folder where now we can **import our DB credentials from `.env`** file.
* Move rest of the folders like `models`, `seeders` and `migrations` inside the `db` folder and **make the folder structure clean**.

---

## ⚙️ Define `.sequelizerc` file

📌 *Put your `.sequelizerc` file inside the `HotelService`* otherwise Sequelize CLI will not be able to read it.

🧠 Inside the `.sequelizerc` file, we write the configuration of Sequelize which is automatically picked up by the Sequelize CLI.

➡️ It allows us to define settings like the **environment**, **configuration file path**, and paths to **migrations**, **seeders**, and **models** folders.

---

## ✅ After creating the files and folders, import all credentials from `.env` file to the `config.ts` file. Now we are ready to move further.

---

# 🚧 Now We Create Migration

* Now before creating the migration we have to create model, it is like schema that we create in mongodb, so first create the schema in object oriented fashion

* So first visit the db>models and see how we have created the models and first create this model then move further.

🛠️ Now Run the command below. It will create a **migration file**:

* Run command from the src>db

```bash
npx sequelize-cli migration:generate --name create-user-table
```
This migration is nothing but the version of the table here you have to write the raw sql query or in object oriented fashion depends on you choice you can write then it will create table in the mysql.

* Visit the src>db>migratons folder to see how you can write up and down part of your migration.

## 🚀 Execute the Migration

after writing migration also add below script in the package.json it will help to run migrate, rollback easily without writing everytime sequelize-cli db:migrate on the terminal
```js
"scripts": {
    "start": "ts-node src/server.ts",
    "dev": "nodemon src/server.ts",
    "migrate": "sequelize-cli db:migrate",
    "rollback": "sequelize-cli db:migrate:undo"
  },
  ```
 *  always run the db:migrate command from the src not from inside the db and run migration command from the db folder.

 * Also create your databae whatever you have named in the .env file(DB_NAME)

```bash
npx sequelize-cli db:migrate or 
npm run migrate 
if configured in the package.json file
```

# Writing API to create user.

* Till so far we have setup the sequelize and create model, run migration on the basis of model and finally write sequelize query to create a table and then migrate the db of it's first version now we have to create user so for that we need to write api.

* So to create api we will use the same flow that we have used in the HotelService model like top to bottom, repository>service>controller>router

* all api related to user like create update read delete, soft delete,hard delte, getDeletedRecord, deleteSoftDeletedUser etc are completed now we will move towards center management.

# Center Management started.

So as usual first we will create a model then we will run the migration command

* created center and centerHoiday models successfully.
* Now i run ----> npm run migrate
