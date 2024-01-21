import './Show.css'
import { useMediaQuery } from 'react-responsive'

export default function Show(props){
    const query = useMediaQuery({
        query: '(max-width: 950px)'
    })
    return (
        <article className='show' id={props.id}>
        {query && <h3>{props.name}</h3>}
            <img src={props.img} alt={props.name}/>
            <div className='name-description'>
                {!query && <h3>{props.name}</h3>}
                <p dangerouslySetInnerHTML={{__html: props.summary}}></p>
                <div className='link'>
                    <div className='los-p'>
                        <p><b>Country: </b>{props.country}</p>
                        <p><b>Type: </b>{props.type}</p>
                        <p><b>Status:  </b>{props.status}</p>
                    </div>
                    <a href={props.url} target='_blank' rel='noreferrer'>See more</a>
                </div>  
            </div> 
        </article>
    )
}