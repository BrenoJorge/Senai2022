-- Faça uma consulta que mostre os nomes dos departamentos e nomes dos produtos que requisitaram Parafuso e Difusor.
SELECT Departamentos.Nome_Depto, Produtos.Nome_produto FROM Departamentos,Produtos WHERE Nome_produto = "Parafuso" OR Nome_produto = "Difusor";

-- Escreva um comando select para mostrar apenas os nomes dos produtos vendidos em Fevereiro de 2018.
select p.Nome_produto from Produtos p

inner join Itens_Solicitacao i on p.cod_produto = i.cod_produto

inner join Solicitacoes s on s.Num_Sol = i.Num_Sol

where s.Data_sol between "2018/02/01" and "2018/02/29";

-- Crie uma view(visão) que mostre os seguintes campos: Num_Sol, Data_sol, Cod_Depto, Nome_Depto , Cod_Func, Nome_Func, Cod_Produto, Nome_produto, Qtde, valor e ordene por num_sol decrescente;
create view vw_sol  as

select i.Num_Sol, s.Data_sol, d.Cod_Depto, d.Nome_Depto , f.Cod_Func, f.Nome_Func, p.Cod_Produto, p.Nome_produto, i.Qtde, i.valor

from Itens_Solicitacao i

inner join Produtos p on i.Cod_Produto = p.Cod_Produto

inner join Solicitacoes s on i.Num_Sol = s.Num_Sol

inner join Departamentos d on s.Cod_Depto = d.Cod_Depto

inner join Funcionarios f on s.Cod_Func = f.Cod_Func

ORDER BY Num_Sol DESC;

-- Crie um procedimento armazenado chamado solicita_um_item(n_sol,depto,func,prod,qtd,total) que receba estes valores e cadastre uma solicitação e um item na data atual.
drop procedure if exists solicita_um_item;

delimiter //

create procedure solicita_um_item(n_sol numeric(4),depto numeric(4),func numeric(4),prod numeric(4),qtd numeric(4),total numeric(12,2))

begin

    insert into Solicitacoes values (n_sol, curdate(), depto, func);

    insert into Itens_Solicitacao values(n_sol, prod, qtd, total);

end//

delimiter ;

SHOW PROCEDURE STATUS;

select Cod_Func, Nome_Func,sum(Valor) as Total from 
(select f.Cod_Func,f.Nome_Func,its.valor from funcionarios f 
inner join solicitacoes s on s.Cod_Func  = f.Cod_Func
inner join Itens_Solicitacao its on s.Num_Sol = its.Num_Sol) 
as Tabela group by Cod_Func
order by total desc limit 1;