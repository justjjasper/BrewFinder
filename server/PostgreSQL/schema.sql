CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR (200),
  password VARCHAR (200),
  email VARCHAR (200)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(200),
  street VARCHAR(200),
  city VARCHAR(200),
  state VARCHAR(200),
  phone INTEGER,
  website VARCHAR(200),
  username VARCHAR(200)
);

