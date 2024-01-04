import React, {useState} from 'react';

const Pagination = ({onClick}) => {
    const newArr = new Array(10).fill(0)
    const [active, setActive] = useState(1)

    const handleChange = (e) => {
        setActive(Number(e))
        onClick(Number(e))
    }


    return (

        <div className={'pagination-container'}>
            <button className={'innerBtn'} onClick={()=>handleChange(active-1)} disabled={active===1}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></button>
            {
                newArr.map((item, index) =>
                    <button className={'btn-pagination'} onClick={() => handleChange(index + 1)} key={index} style={{background:active===index+1?'linear-gradient(180deg, #6c1f41 0%, #210d0e 100%)':'transparent'}}>
                        {index + 1}
                    </button>
                )
            }
            <button className={'innerBtn'} onClick={()=>handleChange(active+1)} disabled={active===20}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button>
        </div>
    )

}
export default Pagination