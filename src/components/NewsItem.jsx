import image from '../assets/news.jpg';
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"330px"}}>
  <img src={src?src:image} style={{height:"200px", width:"310px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer,  Marcus Tullius Cicero."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem;
