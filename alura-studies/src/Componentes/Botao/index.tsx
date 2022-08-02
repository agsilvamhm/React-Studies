import React from 'react';
import style from './Botao.module.scss'

class Botao extends React.Component{
    render(): React.ReactNode {
        return (
            <div className={style.botao}>
                <button>
                   Botão 
                </button>
            </div>
        )
    }
}

export default Botao;