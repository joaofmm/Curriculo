import './curriculo.css'

function Curriculo() {
    return (

<div className='corpo'>

<div className='cabecalho'>

        <div className='informacoes'>
            <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' alt='Logo'/>
            <div>
            <h3>Carlos Roberto pinheiro Vieira</h3>
            <p>Engenheiro Civil</p>
            </div>
        </div>




        <div className='contato'>

            <div className='separar'>
            <img src="https://cdn0.iconfinder.com/data/icons/social-media-and-logos-11/32/Gmail_envelope_letter_email_Gmail_envelope_letter_email-256.png" alt="icone-email" />
            <p>pedrofontura83@gmail.com</p>
            </div>

            <div className='separar'>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/375_Whatsapp_logo-256.png" alt="icone-whats" />
            <p>(11)99345-2482</p>

            </div>

        </div>


    </div>

<div className='conteudo'>

<div className='objetivo'>
    <h2>Meus Objetivo</h2>
    <br/>
    <p>Desenvolver e manter projetos residenciais, comerciais e industriais, com ênfase em engenharia civil.</p>
    <p>Quero me tornar um dos melhores engenheiros de Campinas(SP) e me tornar conhecido nacionalmentepelos meus futuros projetos</p>
</div>

<div className='formacao'>
    <h2>Minhas Formações</h2>
    <br/>
    <p> Ensino Fundamental : Carlos Arruda Botelho , 1 ao 9 ano</p>
    <p> Ensino Medio : Etec Bento Quirino , 1 ao 3 ano</p>
    <p> Ensino Superior :Puc Campinas , 1 ao 5 ano  </p>
</div>


    <div className='meusprojetos'>
        <h2>Meus Projetos</h2>
        <br/>
        <p>ajudei na construção do do centro de saúde São Vicente como estágiario ganhando muita experiencia com esse projetos, o projeto durou aproximadamente 2 anos 3 meses.
            Eu fiz essse estagioi enquanto estava no 3 ano da faculdade </p>
        <br/>
        <p>  consegui tambem um trabalho em uma empresa que foi contratada por licitação pela prefeitura  para realizar a construção de uma nova creche na cidade  no bairro Paraíso de viracopos</p>
    </div>
</div>
</div>
    )
}

    export default Curriculo