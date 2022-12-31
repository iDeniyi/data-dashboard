CREATE DATABASE admin_dashboard;

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    phone_number VARCHAR(15)
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    in_stock INTEGER,
    sold INTEGER,
)

CREATE TABLE sale(
    sale_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customer(customer_id),
    product_id INTEGER REFERENCES product(product_id),
    num_of_items INTEGER,
    date DATE NOT NULL
)