import React, {useState} from 'react';

const Pagination = ({onClick}) => {
    const newArr = new Array(10).fill(0)
    const [active, setActive] = useState(1)

    const handleChange = (e) => {
        setActive(Number(e))
        onClick(Number(e))
    }


    return (

        <div>
            <button onClick={()=>handleChange(active-1)} disabled={active===1}>Назад</button>
            {
                newArr.map((item, index) =>
                    <button onClick={() => handleChange(index + 1)} key={index} style={{background:active===index+1?'green':'white'}}>
                        {index + 1}
                    </button>
                )
            }
            <button onClick={()=>handleChange(active+1)} disabled={active===10}>Вперед</button>
        </div>
    )

}
export default Pagination