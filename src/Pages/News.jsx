import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import {API_URL} from "../config.js"

function News(){
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const getNews =async () => {
            const res = await fetch(`${API_URL}/news`);
            const data = await res.json();
            setNews(data);
        }
        getNews();
    },[])
    
    return(<>
    <div className="flex flex-wrap">

        {
        news.map(item => (
            <div className="w-1/2" key={item.id}>
                <NewsCard id={item.id} img={item.img} title={item.title} short={item.short}/>
            </div>
        ))
        }
       
        
    </div>
        
        
    </>)
}
export default News;