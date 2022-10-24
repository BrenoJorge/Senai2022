const toCreate = (dados,file) =>{
    if (file != null){
        dados.foto = file.buffer.toString('base64');
        return `insert into clientes values (default,'${dados.nome}','${dados.foto}')`;
    }else
        return `insert into clientes values (default,'${dados.nome}', null)`;
}

const toReadAll = ()=>{
    return "select * from clientes order by id desc";
}

const toAscii = (dados)=>{
    dados.forEach(d => {
        if(d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

module.exports = {
    toCreate,
    toReadAll,
    toAscii
}