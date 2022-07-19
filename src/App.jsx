import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import Repositorios from './componentes/Repositorios/Repositorios'
import Texto from './componentes/Textos/Textos'
import Titulo from './componentes/Titulo/Titulo'
import Imagem from './componentes/Imagem/Imagem'
import Projetos from './componentes/Projetos/Projetos'
import './App.css'

function App() {

    return (
        <> 
        <header>
        <Header>    
            Meu Portfólio da Reprograma
        </Header>
        </header>

        <nav className="navbar">
            <Imagem image="https://media.giphy.com/media/2lZ9z2zEOiPElTBYiy/giphy.gif" alt="imagem da desenvolvedora do site" />
            <Titulo title="Olá, eu sou a Maria Roberta" />
        </nav>

        <Apresentacao>
            <h2> Sou Maria Roberta, tenho 29 anos e sou de Olinda-PE. Estou em transição de carreira. Sou professora de reforço escolar para crianças do infantil ao 9º ano. Atualmente sou aluna de front-end na turma On17 da Reprograma. Onde desenvolvi essa e outras páginas. Conheça alguns projetos que fiz.</h2>
            <hr/>
        </Apresentacao>

        <section>
            <Projetos/>
        </section>

        <article>
            < Repositorios/>
        </article>

        <footer>
            <Footer> Página desenvolvida por Maria Roberta | Turma On17 | 2022</Footer>
        </footer>
        </>
    )
}
  export default App