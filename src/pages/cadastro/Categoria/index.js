import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    // const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
    

    function setValue(chave, valor) {
        //chave: nome, descricao, cor
        setValues({
            ...values,
            [chave]: valor // se no valor da chave veio nome, ficará nome: 'valor' 
        })
    }

    function handleChange(infosDoEvento) {
        // setValue('nome', infosDoEvento.target.value);
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );        
    }

    useEffect(() => {
        // const URL_TOP = 'http://localhost:8080/categorias';
        // \/ variavel de ambiente
        const URL_TOP = window.location.hostname.includes('localhost') 
        ? 'http://localhost:8080/categorias'
        : 'https://mendiflix.herokuapp.com/categorias';
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                // \/ aqui precisa do desconstruction pq:
/* esse objeto ta na memoria com uma resposta q veio do servidor, se vc passa
 a ref direto, em memoria, ele vai continuar usando essa ref q ele  recebeu do começo.
 AQUI, a gente ta criando uma nova, da nossa aplicação, do nosso contexto
 q a gente vai ta recriando toda vez q a gente for fazer, e essa antiga o coletor
 de lixo do navegador pode mandar bala e limpar e n tera mais nada atrelado a ela*/
                setCategorias([
                    ...resposta
                ]);
                //oou passar setCategorias(resposta) direto
            });

        // setTimeout(() => {
        //     setCategorias([
        //         ...categorias,
        //         {
        //             id: 1,
        //             nome: 'Front End',
        //             descricao: 'Uma categoria bacanuda',
        //             cor: '#CBD1FF'
        //         },
        //         {
        //             id: 2,
        //             nome: 'Back End',
        //             descricao: 'Outra categoria bacanuda',
        //             cor: '#CBD1FF'
        //         },                                
        //     ]);
        // }, 4 * 1000);        
    }, []);

    return (
        <PageDefault>
            {/* <h1>Cadastro de Categoria: {nomeDaCategoria}</h1> */}
            <h1>Cadastro de Categoria: {values.nome}</h1>

            {/* <form style={{ background: nomeDaCategoria }} onSubmit={function handleSubmit(infosDoEvento) { */}
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                // console.log('vc tentou enviar o form, ne?');
                setCategorias([
                    ...categorias,
                    values                                
                ]);

                setValues(valoresIniciais); // p ir limpando o form p gente
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                
                <Button>
                    Cadastrar
                </Button>

            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                    //    <li key={`${categoria}${indice}`}>
                       <li key={`${categoria.nome}`}>
                           {/* {categoria} assim dará erro, pois o react n sabe lidar com o objeto inteiro aparecendo */}
                           {categoria.nome}
                       </li> 
                    )

                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;

/* <div>
    <label>
        Descrição:
        <textarea
        name="descricao"
        onChange={handleChange}
        type="text"
        value={values.descricao}
        />
    </label>
</div> */

/*arrow function:
    categorias.map( () => {} )
    ou
    categorias.map(() => {

    })
*/

/*
virou disso:
function handleChange(infosDoEvento) {
    // setValue('nome', infosDoEvento.target.value);
    setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
    );        
}
pra isso:
function handlerChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
        getAttribute('name'),
        value
    )
}
*/ 

/*
<div>
    <label>
        Cor:
        <input
        type="color"
        value={values.cor}
        onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
            console.log('[nomeDaCategoria]', nomeDaCategoria);
            console.log('[infosDoEvento]',infosDoEvento.target.value);
            setNomeDaCategoria(infosDoEvento.target.value);
        }}
        />
    </label>
</div>
*/ 