import Axios from 'axios';

const URL:String = 'http://localhost:4000/api';

export const fetchData = async() =>{

    try {

        const { data } = await Axios.get(`${URL}/video`)
    
        return data;

    } catch (error) {
        
    }

}