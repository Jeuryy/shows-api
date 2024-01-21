import { useEffect } from 'react';
import './InputSearch.css'
import { CiSearch } from "react-icons/ci";


export default function InputSearch(props){
    const {loader} = props;

    const searchShow = (e) => {
        if (e.key === 'Enter') {
            if (props.value === " " || props.value === "") {
                props.setError(false);
                props.setLoader(false);
                props.setShowElements(false);
                //props.setDataElements([]);
            }
            if (props.value !== " " && props.value !== "") {
                props.setLoader(true);
                //props.getShows(e);
            }
        }
    }   

    useEffect(()=> {
        props.getShows();
    }, [loader])

    return (
        <div className='input'>
            <input type='search' id='input-search' placeholder='Search...' 
            onChange={props.onChange} value={props.value} onKeyUp={searchShow}
            autoComplete='off'/>
            <CiSearch className='input-logo'/>
        </div>
    )
}