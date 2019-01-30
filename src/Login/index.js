import React from 'react';
import './style.css';
export default class Login extends React.Component {


    render() {
        return (

            <div className='login'>


                <dialog id='edit-link-dialog'>
                    <div id='dialog-title'>Login</div>
                    <form id='login-form' action=''>
                        <div id='email' className='field-container'>
                            <label id='title-field-name' className='field-title' aria-label='Nome'>Email</label>
                            <div className='input-container'>
                                <input id='email' className='field-input' type='email' autoComplete='off' tabIndex='0' />
                                <div className='underline'></div>
                            </div>
                        </div>

                        <div id='password' className='field-container'>
                            <label id='title-field-name' className='field-title' aria-label='Senha'>Senha</label>
                            <div className='input-container'>
                                <input id='password' className='field-input' type='password' autoComplete='off' tabIndex='0' required spellCheck='off' />
                                <div className='underline'></div>

                            </div>
                        </div>

                        <div className="buttons-container">
                            <span>
                                <button hidden id="delete" className="secondary" type="button" tabIndex="0" title="Remover" aria-label="Remover React App">Remover</button>
                            </span>
                            <span>
                                <button hidden id="cancel" className="secondary" type="button" tabIndex="0" title="Cancelar" aria-label="Cancelar">Cancelar</button>
                                <button type="submit" id="done" className="primary" tabIndex="0" title="Acessar" aria-label="Acessar">Acessar</button>
                            </span>
                        </div>



                    </form>

                </dialog>
            </div>

        )
    }



}