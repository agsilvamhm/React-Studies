import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component{
    render(){
        return (
            <form>
                <div>
                    <label htmlFor='tarefa'>Adicione uma nova disciplina: </label>
                    <input type="text" id="tarefa" name="tarefa" placeholder='O que você deseja estudar?' required/>
                </div>

                <div>
                 <label htmlFor='tempo'>Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" 
                    min="00:00:00" max="01:30:00" required />
                </div>  
                <Botao/>  
            </form>
        )
    }
};

export default Formulario;