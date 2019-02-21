import React from 'react';

const FormErrors = ({ formErrors }) =>
        <ul className='list-group'>
            {Object.keys(formErrors).map((fieldName, i) => {
                if (formErrors[fieldName].length > 0) {
                    return (
                        <li className='list-group-item' key={i}>{formErrors[fieldName]}</li>
                    )
                } else {
                    return '';
                }
            })}
        </ul>


export default FormErrors;