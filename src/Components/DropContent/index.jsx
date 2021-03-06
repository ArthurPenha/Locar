import "./style.css"
import {getCookie,login,deleteCookies} from "../CookiesHandler"
import React,{ useState, useEffect } from "react";

function DropContent(props){
    useEffect(() => {
        getUser()
        },[])  
    function getUser(){
    return getCookie("tipousuario") == null? 0 : getCookie("tipousuario")}

   

    const [userName,setUsername] = useState("")
    const [senha,setSenha] = useState("")
    
    if(getUser()==0)
    {
        return(
            <div className="drop-content" id="drop-content">
                    <label htmlFor="email">E-mail</label>
                    <input autoComplete="off" type="email" name="usuario" id="email" value={userName} onChange={usuario=>setUsername(usuario.target.value)} placeholder="Digite seu E-mail!" />
                    <label autoComplete="off" htmlFor="senha">Senha</label>
                    <input type="password" value={senha}  name="senha" id="senha" placeholder="Digite sua Senha!" onChange={senha=>setSenha(senha.target.value)} />
                    <button type="submit"id="logon" onClick={()=>login(userName,senha)}>Entrar</button>
                    <p>Problemas para logar? <a href="contato">Clique aqui!</a></p>
                    <p>Ainda não é usuário? <a href="cadastrocliente">Cadastre-se!</a></p>
            </div>
        )
    }
    else if(getUser()==1){

        return(
            <div className="drop-content" id="drop-content">
                <ul className="menuLogado">
                    <li id="nomeUsuario" className="nomeUsuario">{getCookie("nomeusuario")}</li>
                    <li className="mlItens" id="logout"  onClick={()=>{deleteCookies(); window.location.assign("http://localhost:3000/")}} >Sair</li>
                </ul>
            </div>
        )

    }
    else{ return(
        <div className="drop-content" id="drop-content">
            <ul className="menuLogado">
                <li id="nomeUsuario" className="nomeUsuario">{getCookie("nomeusuario")}</li>
                <li className="mlItens" id="EditarPerfil" onClick={()=>{window.location.assign("http://localhost:3000/atualizar")}}>Editar Perfil</li>
                <li className="mlItens" id="historicoLocacoes" onClick={()=>{window.location.assign("http://localhost:3000/historicoreservas")}}>Histórico de locações</li>
                <li className="mlItens" id="logout"  onClick={()=>{deleteCookies(); window.location.assign("http://localhost:3000/")}} >Sair</li>
            </ul>
        </div>
    )

    }
}
                    
export default DropContent