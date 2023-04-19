import {useState} from 'react';

import blogData from '../data/blogData2_27';
import Wrapper from '../assets/wrapper/Blogs_27';
import { useDemoContext_27 } from '../context/DemoContext_27';

const BlogsLocalPages_27 = () => {
    // const [ name, setName] = useState('陳信安');
    // const [id , setId] = useState('210417027');

    // const [data, setData] = useState(blogData);
    // console.log('blog Data', data);
    const {pName, pId, blogs} = useDemoContext_27();

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Blogs From Local Json Data</h2>
        <h3> {pName} {pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs.map((item) => {
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

export default BlogsLocalPages_27;