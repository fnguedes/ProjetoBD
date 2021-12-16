const { pool } = require('./DB.js')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Isso ainda é no routes.js! Logo abaixo dos outros códigos.
// Iniciando o app.
const app = express();
app.use(cors());
app.use(express.json());
// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/produtos', async (req, res) => {
    let produtos = await pool.query("SELECT p.id,p.nome,c.categoria FROM mercado.produto AS p JOIN mercado.produto_categoria AS pc ON (p.id=pc.produto_id)JOIN mercado.categoria AS c ON (c.id=pc.categoria_id)");

    return res.status(200).send({ data: produtos.rows });
});
app.get('/detalhes_produtos', async (req, res) => {
    let produtos = await pool.query("SELECT p.id,p.nome,c.categoria,ca.preco,ca.quantidade,pc.id_prod_cat FROM mercado.catalogo AS ca JOIN mercado.produto AS p ON(ca.produto_id=p.id) JOIN mercado.produto_categoria AS pc ON (p.id=pc.produto_id)JOIN mercado.categoria AS c ON (c.id=pc.categoria_id) ORDER BY p.id ASC");

    return res.status(200).send({ data: produtos.rows });
});
app.get('/categorias', async (req, res) => {
    let categorias = await pool.query("SELECT * FROM mercado.categoria");

    return res.status(200).send({ data: categorias.rows });
});

app.post('/cadastrar_produto',async(req,res)=>{
    const {nome,categoria1,categoria2,preco,quantidade}=req.body;
    await pool.query("INSERT INTO mercado.produto values(DEFAULT,$1)",[nome]);

    let newprod= (await pool.query("SELECT id FROM mercado.produto WHERE nome=$1",[nome])).rows[0];
    
    await pool.query("INSERT INTO mercado.catalogo values(839213,$1,$2,$3)",[newprod.id,preco,quantidade]);
    await pool.query("INSERT INTO mercado.produto_categoria values($1,$2,DEFAULT)",[newprod.id,categoria1]);
    await pool.query("INSERT INTO mercado.produto_categoria values($1,$2,DEFAULT)",[newprod.id,categoria2]);
    
    return res.status(200).send({produto: newprod});
});

app.post('/alterar_produto',async(req,res)=>{
    const{id,nome,categoria,categoriaAnt,preco,quantidade}=req.body
    await pool.query("UPDATE mercado.produto SET nome=$1 WHERE id=$2",[nome,id])
    
    await pool.query("UPDATE mercado.catalogo SET preco=$1,quantidade=$2 WHERE produto_id=$3",[preco,quantidade,id])
    await pool.query("UPDATE mercado.produto_categoria SET categoria_id=$1 WHERE id_prod_cat=$2",[categoria,categoriaAnt])

    let produto = await pool.query("SELECT p.id,p.nome,c.categoria,ca.preco,ca.quantidade FROM mercado.catalogo AS ca JOIN mercado.produto AS p ON(ca.produto_id=p.id) JOIN mercado.produto_categoria AS pc ON (p.id=pc.produto_id)JOIN mercado.categoria AS c ON (c.id=pc.categoria_id) WHERE pc.id_prod_cat=$1",[categoriaAnt]);

    return res.status(200).send({prod:produto})
})

app.post('/deletar_produto',async(req,res)=>{
    const{id}=req.body
    await pool.query("DELETE FROM mercado.produto WHERE id=$1",[id])
})


app.post('/cadastrar_categoria',async(req,res)=>{
    const {categoria}=req.body
    await pool.query("INSERT INTO mercado.categoria values(DEFAULT,$1)",[categoria]) 
    
    let cat= (await pool.query("SELECT * FROM mercado.categoria WHERE categoria=$1",[categoria])).rows[0]
    
    return res.status(200).send({categoria: cat});
});

app.post('/alterar_categoria',async(req,res)=>{
    const {id,categoria}=req.body
    await pool.query("UPDATE mercado.categoria SET categoria = $1 WHERE id=$2 ",[categoria,id])
    
    let newcat= (await pool.query("SELECT id FROM mercado.categoria WHERE id=$1",[id])).rows[0];
    
    return res.status(200).send({catAt:newcat})
})

app.post('/deletar_categoria',async(req,res)=>{
    const {id}=req.body
    await pool.query("DELETE FROM mercado.categoria WHERE id=$1",[id])
})
// app.post('/delete_categoria')

// Iniciando o servidor.
app.listen(3000, () => {
    console.log('Vai no navegador e entra em http://localhost:3000/produtos pra ver os produtos cadastrados.');
    console.log('Vai no navegador e entra em http://localhost:3000/detalhes_produtos pra ver os detalhes dos produtos cadastrados.');
    console.log('Vai no navegador e entra em http://localhost:3000/cadastrar_produto pra cadastrar os produtos.');
    console.log('Vai no navegador e entra em http://localhost:3000/cadastrar_categoria pra casdastrar categoria.');
    console.log('Vai no navegador e entra em http://localhost:3000/alterar_categoria pra alterar categoria.');
    
});

// app.listen(3001, () => {
    
// });