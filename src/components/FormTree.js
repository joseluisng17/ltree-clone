import React, { useContext, useState } from 'react'
import { LinkContext } from '../context/LinkContext';
import { Error } from './Error';
import { v4 as uuidv4 } from 'uuid';

export const FormTree = () => {

    const { registrarLink } = useContext( LinkContext );

    const [error, setError] = useState(false);
    const [formValues, setFormValues] = useState({ title: '', url: '' });
    const { title, url } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
        ...formValues,
        [target.name]: target.value      
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if( title.trim().length < 2 || url.trim().length < 2 ){
            setError(true);
            return;
        }

        setError(false);

        //const id = uuidv4();
        formValues.id = uuidv4();

        //console.log(formValues);

        registrarLink(formValues);

        setFormValues({ title: '', url: '' });

    }


    return (
        <div>

            <form
                onSubmit={ handleSubmitForm }
            >
                <button type="submit" className="btn-add">Add new Link</button>

                <div className="input-cont">
                    <div className="input">
                        <input 
                            type="text" 
                            name="title"
                            value={ title }
                            onChange={ handleInputChange }
                        />
                        <label for="">Title</label>
                    </div>
                    <div className="input">
                        <input 
                            type="text" 
                            name="url"
                            value={ url }
                            onChange={ handleInputChange }
                        />
                        <label for="">Url</label>
                    </div>
                </div>

            </form>

            { error ? <Error mensaje="Llenar todos los campos" /> : null}

        </div>
    )
}
