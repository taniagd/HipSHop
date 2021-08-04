CREATE DATABASE hip_shop;
USE hip_shop;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_birth DATE,
    address VARCHAR(250),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL,
    phone_number VARCHAR(20),
    aka VARCHAR(30)
);

CREATE TABLE vendor(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_birth DATE,
    address VARCHAR(250),
    aka VARCHAR(30),
    bank_account VARCHAR(40) NOT NULL,
    bank_name VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    hip_hop_branch ENUM ('rap&freestyle','breaking', 'djs&beatmakers', 'graffiti' )
);

CREATE TABLE purchase_order(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL,
    address VARCHAR(250),
    guide_number VARCHAR(70),
    package_status VARCHAR(20),
    CONSTRAINT fk_user_pusrchase FOREIGN KEY (user_id) REFERENCES user(id)
);



CREATE TABLE album(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    price DECIMAL NOT NULL,
    image VARCHAR(100) NOT NULL, 
    CONSTRAINT pk_album PRIMARY KEY(id) 
);

CREATE TABLE song(
    id INT NOT NULL AUTO_INCREMENT,
    album_id INT NOT NULL,
    song_number INT NOT NULL,
    song_name VARCHAR (50) NOT NULL,
    duration VARCHAR(10) NOT NULL, 
    path VARCHAR(100),
    CONSTRAINT pk_song PRIMARY KEY(id),
    CONSTRAINT fk_song_album FOREIGN KEY (album_id) REFERENCES album(id)
);

CREATE TABLE card(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    holder VARCHAR(50),
    card_number INT NOT NULL,
    expiration_date VARCHAR(5) NOT NULL,
    cvv INT NOT NULL,
    CONSTRAINT pk_card PRIMARY KEY (id),
    CONSTRAINT fk_card_user FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE sku(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
   CONSTRAINT pk_sku PRIMARY KEY (id)
);

CREATE TABLE clothing(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    sku_id INT NOT NULL,
    color VARCHAR(50) NOT NULL,
    size VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    gender ENUM ('Hombre','Mujer','Unisex'),
    price DECIMAL NOT NULL,
    weight DECIMAL NOT NULL,
    CONSTRAINT pk_clothing_id PRIMARY KEY(id),
    CONSTRAINT fk_sku_id FOREIGN KEY(sku_id) REFERENCES sku(id)
);

CREATE TABLE service(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(50) NOT NULL,
    price DECIMAL NOT NULL,
    CONSTRAINT pk_service PRIMARY KEY (id)
);

CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT,
    album_id INT,
    clothing_id INT,
    service_id INT,
    vendor_id INT NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (id),
    CONSTRAINT fk_vendor_products FOREIGN KEY (vendor_id) REFERENCES product(id),
    CONSTRAINT fk_album_id FOREIGN KEY (album_id) REFERENCES album(id),
    CONSTRAINT fk_clothing_id FOREIGN KEY (clothing_id) REFERENCES clothing(id),
    CONSTRAINT fk_service_id FOREIGN KEY (service_id) REFERENCES service(id)
);

CREATE TABLE favorites(
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT pk_favorites PRIMARY KEY (id),
    CONSTRAINT fk_favorites_userid FOREIGN KEY (user_id) REFERENCES user(id),
    CONSTRAINT fk_favorites_productid FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE clothing_img(
    id INT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    clothing_id INT NOT NULL,
    CONSTRAINT pk_clothingimg PRIMARY KEY (id) ,
    CONSTRAINT fk_clothing_img FOREIGN KEY (clothing_id) REFERENCES clothing(id)
);
CREATE TABLE order_item(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES purchase_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE following(
    id INT NOT NULL AUTO_INCREMENT,
    vendor_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT pk_following PRIMARY KEY (id),
    CONSTRAINT fk_vendor_following FOREIGN KEY (vendor_id) REFERENCES vendor(id),
    CONSTRAINT fk_user_following FOREIGN KEY (user_id) REFERENCES user(id)
);