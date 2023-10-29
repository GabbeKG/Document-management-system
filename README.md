# Document-management-system

A docuement management system with Next.js and mysql database.

This project utilize Quills WYSIWYG editor with previews by converting the delta object into HTML that then pupolate the Document gallery to view all documents and with CRUD functionality.

It also makes use of mysql2 to handle the connection with a local database (I used MAMP). Feel free to try it out but you'll have to setup your database (use the Interfaces.tsx as a reference on how to setup up tour mysql database with MAMP). In addition you'll have to create a .env.local file with the connection query.

Your .env.local file should look similar to this:

NEXTPUBLIC_DB_HOST=localhost
NEXTPUBLIC_DB_PORT='the port to your database'
NEXTPUBLIC_DB_NAME='name of your database'
NEXTPUBLIC_DB_USER='your username'
NEXTPUBLIC_DB_PASSWORD='your password'

Without NEXTPUBLIC in the variable name Next won't be able to find your varaibles for setting up you db.js query file.

## How to run:

npm i

npm mysql2

npm next

npm quill

npm quill-delta-to-html

npm run dev
