import Axios from 'axios';
import { Video } from '../interfaces/reqRes';

const URL:String = 'http://localhost:4000/api';

export const fetchData = async() =>{

    try {

        const { data } = await Axios.get(`${URL}/video`)
    
        return data;

    } catch (error) {
        console.log(error)
    }

}

export const createVideo = async(video: Video) =>{

    try {
        
        return await Axios.post(`${URL}/video`, video);

    } catch (error) {
        console.log(error);
    }

}

export const getData = async(id: String) =>{

    try {
        const { data } = await Axios.get<Video>(`${URL}/video/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }

}

export const updateVideo = async(id: string, video: Video) => {

    try {
        return await Axios.put<Video>(`${URL}/video/${id}`, video)
    } catch (error) {
        console.log(error);
    }

}

export const deleteVideo = async(id: string) =>{
    try {
        return await Axios.delete<Video>(`${URL}/video/${id}`)
    } catch (error) {
        console.log(error);
    }
}