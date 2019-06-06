1. Explain the difference between `RDBMS` and `SQL`.

RDBMS is a relational database management system. It manages the storage and queries. 

SQL is the querying language used to interact with the system.

1. Why do tables need a `primary key`?

They need the unique key to identify that particular entery for ease of querying and creating relationships.

1. What is the name given to a table column that references the primary key on another table.

Foreign key

1. What do we need in order to have a _many to many_ relationship between two tables.

You need a new table to keep track of the relationships. The new table would have an id, the id of the item from the first table, the id of the item from the second table, and any other information related to that relationship.
