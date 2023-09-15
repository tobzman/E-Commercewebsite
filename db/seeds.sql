INSERT INTO category (category_name) VALUES
  ('Electronics'),
  ('Clothing'),
  ('Home & Kitchen');


INSERT INTO product (product_name, price, stock, category_id) VALUES
  ('Smartphone', 499.99, 50, 1),
  ('Laptop', 899.99, 30, 1),
  ('T-shirt', 19.99, 100, 2),
  ('Jeans', 39.99, 75, 2),
  ('Coffee Maker', 79.99, 25, 3),
  ('Blender', 59.99, 20, 3);


INSERT INTO tag (tag_name) VALUES
  ('New'),
  ('On Sale'),
  ('Bestseller'),
  ('Electronics'),
  ('Fashion'),
  ('Appliances');


INSERT INTO product_tag (product_id, tag_id) VALUES
  (1, 1),
  (1, 4),
  (1, 5),
  (2, 1),
  (2, 4),
  (3, 2),
  (3, 5),
  (4, 2),
  (4, 5),
  (5, 3),
  (5, 6),
  (6, 3),
  (6, 6);
