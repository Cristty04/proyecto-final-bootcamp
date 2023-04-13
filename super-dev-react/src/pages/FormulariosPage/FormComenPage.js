import React, { useState } from 'react'

function FormComenPage() {

    const[comentario, setComentario] = useState({
        title:'',
        description:''
    })

    return (
        <form>
            <input name='title' type= "text" placeholder="title"/>
            <textarea name='decription' placeholder='decription'/>
                <button> Enviar </button>
        </form>
    )
}

export default FormComenPage
