create table users if not exists (
	id serial primary key, 
	name text not null,
	age int not null,
	isAdmin boolean default FALSE
)

insert into users (id, name, age, isAdmin) values
(1, 'John', 66, 'true'),
(2, 'Patrick', 27, 'false'),
(3, 'Tom', 55 'false');