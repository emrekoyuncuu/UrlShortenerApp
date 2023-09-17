import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputShortener from '../Components/InputShortener'
import LinkResult from '../Components/LinkResult'

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className='myContainer'>
            <InputShortener setInputValue={setInputValue} />
            <LinkResult inputValue={inputValue} />
        </div>
    )
}

export default Home