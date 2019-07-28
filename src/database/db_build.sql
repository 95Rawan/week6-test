BEGIN;
DROP TABLE IF EXISTS cities CASCADE;

create table cities(
  id serial primary key,
  name varchar(100) not null,
  country text not null
);


insert into cities(name, country)values('Hebron', 'Palestine'),
('Madrid', 'Spain'),
('Paris', 'France');

COMMIT;
