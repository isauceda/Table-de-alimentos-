-- Active: 1706152269886@@127.0.0.1@5432@api_mercadito@public
create table tbl_alimento
(
    id serial primary key ,
    nombre varchar (100),
    cantidad varchar(50),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_alimento
(nombre, cantidad)
values
('frijoles','cuatro libras'),
('maiz','cinco libras'),
('papel','cuatro rollos');

select * from tbl_alimento