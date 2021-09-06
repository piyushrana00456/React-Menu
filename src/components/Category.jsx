import "./category.css"


export function Category({title, imageUrl}){
    return (
    <div className="category">
       <img src={imageUrl} alt="img"/> 
       <h4>{title}</h4>
    </div>
    );
}