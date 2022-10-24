const listar_produtos = (model) => {
    return "select * from produtos"
}

const add_produto = ( model ) => {
    return `insert into Produtos values(${model.Cod_Produto}, "${model.Nome_produto}")`
}

const alterar_produto = ( model ) => {
    return `update produtos set Cod_Produto=${model.Cod_Produto}, Nome_produto="${model.Nome_produto}" where Cod_Produto=${model.Cod_Produto}`
}

const add_departamento = ( model ) => {
    return `insert into Departamentos values(${model.Cod_Depto}, "${model.Nome_Depto}")`
}

const listar_departamentos = ( model ) => {
    return `select * from Departamentos`
}

const deletar_departamento = ( model ) => {
    return `delete from Departamentos where Cod_Depto = ${model.Cod_Depto}`
}

const solicitacao = ( model ) => {
    return `call solicita_um_item(${model.n_sol},${model.depto},${model.func},${model.prod},${model.qtd},${model.total})`
}

const vw_sol = ( model ) => {
    return 'select * from vw_sol'
}

const buscar_produto_departamento = ( model ) => {
    return `SELECT Departamentos.Nome_Depto, Produtos.Nome_produto FROM Departamentos,Produtos WHERE Nome_produto = "${model.Nome_produto}";`
}

const buscar_produto_mes = ( model ) => {
    return `select p.Nome_produto from Produtos p inner join Itens_Solicitacao i on p.cod_produto = i.cod_produto inner join Solicitacoes s on s.Num_Sol = i.Num_Sol where s.Data_sol LIKE "${model.Data_sol}%"`
}

const solicitacoes_funcionario = ( model ) => {
    return `select Cod_Func, Nome_Func,sum(Valor) as Total from (select f.Cod_Func,f.Nome_Func,its.valor from funcionarios f inner join solicitacoes s on s.Cod_Func  = f.Cod_Func inner join Itens_Solicitacao its on s.Num_Sol = its.Num_Sol) as Tabela group by Cod_Func order by total desc`
}

module.exports = {
    listar_produtos,
    add_produto,
    add_departamento,
    deletar_departamento,
    solicitacao,
    vw_sol,
    buscar_produto_departamento,
    buscar_produto_mes,
    solicitacoes_funcionario,
    alterar_produto,
    listar_departamentos
}