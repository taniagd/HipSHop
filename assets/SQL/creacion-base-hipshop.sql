CREATE TYPE hiphopbranch AS ENUM ('rap&freestyle','breaking', 'djs&beatmakers', 'graffiti' );

CREATE TABLE user{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_birth DATE,
    address VARCHAR(250),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL,
    phone_number VARCHAR(20),
    aka VARCHAR(30)
}

CREATE TABLE vendor{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_birth DATE,
    address VARCHAR(250),
    aka VARCHAR(30),
    bank_account VARCHAR(40) NOT NULL,
    bank_name VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    hip_hop_branch hiphopbranch
}

CREATE TABLE order{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL,
    address VARCHAR(250),
    guide_number VARCHAR(70),
    package_status VARCHAR(20)
}

CREATE TABLE order_item{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
}