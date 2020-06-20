import React from 'react'
import Noticia from './Noticia';
import PropTypes from 'prop-types'

const ListadoNoticas = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map( noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}

ListadoNoticas.propTypes = {
    noticias: PropTypes.array.isRequired
}
export default ListadoNoticas
