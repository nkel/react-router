import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useParams } from "react-router";

function NewsDetail(){

    const [news, setNews] = useState([])
    let { id } = useParams();

    useEffect(()=>{
        const getNews = async()=>{
             const res = await fetch(`${API_URL}/news/${id}`);
            const data = await res.json();
            setNews(data);
        }
        getNews();
    },[])

    return(<>

            <img src={news.img} className="h-96 w-full object-cover" alt="" />

            <h2>{news.title}</h2>
            <div>{news.content}</div>
            
    
    </>)
}

export default NewsDetail;