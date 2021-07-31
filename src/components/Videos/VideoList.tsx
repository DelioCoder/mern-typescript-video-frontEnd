import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/index';
import { Video } from '../../interfaces/reqRes';
import { VideoItem } from './VideoItem';

export const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const fetchAPI = async () =>{
        
        const res = await fetchData();
        const formatedVideos = res.map((video: { createdAt: string | number | Date; updatedAt: string | number | Date; }) => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
            }
        })
        .sort((a: { createdAt: { getTime: () => number; }; }, b: { createdAt: { getTime: () => number; }; }) => b.createdAt.getTime() - a.createdAt.getTime());

        setVideos(formatedVideos);

    }

    useEffect(() => {
        
        fetchAPI();

    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {
                videos ? videos.map((video, i) => (
                    
                    <VideoItem key={i} video={video} loadVideos={fetchAPI} />
                  
                )) : (<div>Cargando</div>)
            }
        </div>
    )
}
