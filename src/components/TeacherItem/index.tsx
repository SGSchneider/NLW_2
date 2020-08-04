import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
    return(
                <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1212210391004135424/O76uLmbK_400x400.jpg" alt="Stefan Schneider"/>
                        <div>
                        <strong>Stefan Schneider</strong>
                        <span>Computação</span>
                        </div>
                    </header>
                    <p>00101011101100010101 0110000100010111011010
                        <br/><br/>
                        Vou te hackeei e tu nem viu. Brincadeiras a parte, n sei oq escrever aki.
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 120,00</strong>
                        </p>
                        <button type="button">
                            <img src={wppIcon} alt="Icone Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;