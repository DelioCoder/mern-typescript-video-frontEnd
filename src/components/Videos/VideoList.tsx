import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/index';
import { Video } from '../../interfaces/reqRes';
import { VideoItem } from './VideoItem';

export const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const fetchAPI = async () =>{
        setVideos(await fetchData());
    }

    useEffect(() => {
        
        fetchAPI();

    }, []);

    return (
        <div>
            {
                videos ? videos.map((video, i) => (
                    <div key={i}>
                        <VideoItem video={video} />
                    </div>
                )) : (<div>Cargando</div>)
            }
        </div>
    )
}
