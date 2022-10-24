alter table pedidos modify pedido_id integer not null primary key auto_increment;

drop procedure if exists insere_pedidos;
delimiter //
create procedure insere_pedidos()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into pedidos values (104, 3, curDate(), curTime(), 60.00);
		insert into itens_pedido values (104, 2, 1, 20);
		insert into itens_pedido values (104, 1, 1, 20);
		insert into itens_pedido values (104, 4, 1, 22);
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
            SELECT * FROM `vw_pedidos_itens` where pedido_id = 104;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

call insere_pedidos();