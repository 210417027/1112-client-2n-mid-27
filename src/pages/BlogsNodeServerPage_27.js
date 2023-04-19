import {useState ,useEffect} from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrapper/Blogs_27';

import { useDemoContext_27 } from '../context/DemoContext_27';


// import blogData from '../data/blogData2_27';

// let api_url = `http://localhost:5000/api/card2_27`;

 let api_url = `https://one112-server-mid-27.onrender.com/api/mid2_27`;


const BlogsNodeServerPages_27 = () => {
    // const [ name, setName] = useState('陳信安');
    // const [id , setId] = useState('210417027');

    // const [data, setData] = useState([]);
    // console.log('blog Data', data);

    const {pName, pId, blogs2} = useDemoContext_27();


    const  fetchBlogDataFromNodeServer = async() => {
      try{
        const result = await axios.get(api_url);
        console.log('result', result);
        // setData(result.data);
      } catch (error){
        console.log(error);
      }
    }

    useEffect(()=> {
      fetchBlogDataFromNodeServer();
    }, []);

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Mid From Node Server Data</h2>
        <h3> {pName} {pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs2.map((item) => {
          const {id, img, remote_img, category,title,desc} = item;
          return(
            <article key={id} className="blog">
          <img
            src={img}
            alt={title}
            className="img blog-img"
          />
          <div className="blog-content">
            <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">read more</a>
          </div>
        </article>
          )
        }) }
      
      </div>
    </section>
        </Wrapper>
    )
}

export default BlogsNodeServerPages_27;