import React from 'react';
import Button from '../../components/button/Button';
import Section from '../../components/section/Section';
import './home.css';
import logoWhite from "../../assets/images/logo_white.png";
import lol from "../../assets/images/lol.png";
import r6 from "../../assets/images/r6.png";
import valorant from "../../assets/images/valorant.png";

const Home = React.memo(() => {
    return (
        <div className='cf-home'>
            <div className='cf-backgroud__register'>
                <Section>
                    <div className='cf-home__subtitle'>CONHEÇA</div>
                    <p className='cf-home__title'>
                        A Scrim Finder te oferece a possibilidade <br />
                        de elevar o nível de sua equipe. Aqui você poderá <br />
                        encontrar times ou jogadores para praticar League of Legends.
                    </p>
                    <Button>CADASTRA-SE</Button>
                </Section>
            </div>
            <Section>
                <div className='cf-home__subtitle cf-home__subtitle--with-bg'>ENTENDA</div>
                <div className='cf-home__title'><b>O que é uma Scrim?</b></div>
                <p className='cf-home__description'>
                    Uma scrim é uma partida de treinamento entre duas equipes de mesmo elo ou próximos. <br />
                    O foco principal é treinar, sem envolver apostas (teste competitivo, estratégia, etc...).
                </p>
            </Section>
            <div className='cf-backgroud__ranking'>
                <Section>
                    <div className='cf-home__subtitle'>NIVELE</div>
                    <div className='cf-home__title'><b>Dena o seu nível para um melhor aproveitamento</b></div>
                    <p className='cf-home__description'>
                        Aqui você poderá ltrar o nível ao criar ou procurar por uma Scrim. É muito fácil e <br />
                        prático, basta selecionar os elos que correspondem a sua Scrim (ou uma que queira <br />
                        ingressar), conrmar a escolha e pronto, agora é só aguardar pela outra equipe.
                    </p>
                </Section>
            </div>
            <div className='cf-home__games'>
                <div className='cf-home__title'>
                    <b>JOGOS DISPONÍVEIS PARA SCRIM</b>
                </div>
                <div className='cf-home__game-images'>
                    <img src={lol} width={300} height={150} alt='logo' />
                    <img src={valorant} width={200} height={150} alt='logo' />
                    <img src={r6} width={300} height={150} alt='logo' />
                </div>
            </div>
            <div className='cf-backgroud__help-us'>
                <Section>
                    <div className='cf-home__subtitle'>APOIA-SE</div>
                    <div className='cf-home__title'><b>Que tal ajudar o pessoal aqui a tomar um cafézinho?</b></div>
                    <p className='cf-home__description'>
                        Nos ajude a manter a plataforma, apoie através do link abaixo. <br />
                        Toda ajuda é bem vinda!
                    </p>
                    <Button>APOIAR</Button>
                    <hr className='cf-home__divider' />
                    <div className='cf-home__extra'>
                        <img src={logoWhite} width={150} height={60} alt='logo' />
                        <div>
                            SCRIM FINDER
                            <div>Sobre nós</div>
                            <div>Politica e Privacidade</div>
                            <div>Termos e Condições</div>
                        </div>
                        <div>
                            CONTATO
                            <div>eduardokegler1@gmail.com</div>
                        </div>
                        <div>
                            REDES SOCIAIS
                            <div>Logo Logo</div>
                        </div>
                    </div>
                </Section>
            </div>
            <footer className='cf-home__footer'>Scrim Finder 2021 - Todos os direitos reservados</footer>
        </div >
    );
});

export default Home;