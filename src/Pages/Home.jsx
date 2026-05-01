import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import {API_URL} from "../config.js"

function Home(){
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
     <h2>კარუსელი</h2>
     <div className="flex flex-wrap">
          {
        news.filter( (item, index) => index < 4 ).map(item => ( 
            <div className="w-1/3" key={item.id}>
                <NewsCard id={item.id} img={item.img} title={item.title} short={item.short}/>
            </div>
        ))
        }
        

     </div>

        <div className="partners">
                პარტრნიორები
        </div>

    </>);
}

export default Home