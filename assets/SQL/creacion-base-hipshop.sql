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

CREATE TABLE hip_shop.song(
    id INT NOT NULL AUTO_INCREMENT,
    album_id INT NOT NULL,
    song_number INT NOT NULL,
    song_name VARCHAR (50) NOT NULL,
    duration VARCHAR(10) NOT NULL, 
    path VARCHAR(100),
    CONSTRAINT pk_song PRIMARY KEY(id),
    CONSTRAINT fk_song_album FOREIGN KEY (album_id) REFERENCES album(id)
);

CREATE TABLE hip_shop.album(
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    product_name VARCHAR (50) NOT NULL,
    price INT NOT NULL,
    poster VARCHAR(100) NOT NULL, 
    CONSTRAINT pk_album PRIMARY KEY(id) 
);

CREATE TABLE hip_shop.card(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    holder VARCHAR(50),
    card_number INT NOT NULL,
    expiration_date DATE NOT NULL,
    cvv INT NOT NULL,
    CONSTRAINT pk_card PRIMARY KEY (id)
    CONSTRAINT fk_card_user FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE hip_shop.favorites(
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT pk_favorites PRIMARY KEY (id)
    CONSTRAINT fk_favorites_userid FOREIGN KEY (user_id) REFERENCES user(id)
    CONSTRAINT fk_favorites_productid FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE sku {
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) INT NOT NULL,
   CONSTRAINT pk_sku PRIMARY KEY (id)
    
}

CREATE TABLE clothing {
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    product_name VARCHAR(50) INT NOT NULL,
    sku_id INT NOT NULL,
    color INT NOT NULL,
    size INT NOT NULL,
    quantly INT NOT NULL,
    gender VARCHAR (50) INT NOT NULL,
    price INT NOT NULL,
    suscription INT NOT NULL,
    weight INT NOT NULL,
    CONSTRAINT pk_clothing PRIMARY KEY(id),
    CONSTRAINT fk_assssjfregn FOREIGN KEY(sku_id) REFERENCES sku(id)
}
