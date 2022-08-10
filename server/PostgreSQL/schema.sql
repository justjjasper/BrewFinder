CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR (200),
  password VARCHAR (200),
  email VARCHAR (200)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR,
  street VARCHAR,
  city VARCHAR,
  state VARCHAR,
  phone VARCHAR,
  website_url VARCHAR,
  username VARCHAR
);

