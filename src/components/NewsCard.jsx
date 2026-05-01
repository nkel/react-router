import { Link } from "react-router";

function NewsCard(props){
    return(<>
        <div className="border rounded-xl border-amber-950 p-2.5 ">
                <img className="h-36 w-full object-cover" src={props.img} />
            <h2 className="text-4xl text-blue-700">{props.title}</h2>
            <div className="text-xs text-gray-500">{props.short}</div>
             
            <Link to={`/news/${props.id}`}>ვრცლად</Link>

        </div>
    
    </>)
}

export default NewsCard;