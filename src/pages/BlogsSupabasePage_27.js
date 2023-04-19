import {useState ,useEffect} from 'react';
// import axios from 'axios';

// import blogData from '../data/blogData2_27';

// let api_url = `http://localhost:5000/api/card2_27`;

//  let api_url = `https://one112-server-card-demo-27.onrender.com/api/card2_27`;

// import { supabase } from '../db/clientSupabase';

import Wrapper from '../assets/wrapper/Blogs_27';

import { useDemoContext_27 } from '../context/DemoContext_27';

const BlogsSupabasePages_27 = () => {
    // const [ name, setName] = useState('陳信安');
    // const [id , setId] = useState('210417027');

    // const [data, setData] = useState([]);
    // console.log('blog Data', data);

    const {pName, pId, blogs} = useDemoContext_27();


    // const  fetchBlogDataFromSupabase = async() => {
    //   try{
    //     let { data, error } = await supabase.from('card_27').select('*')

    //     console.log('data', data);
    //     // console.log('result', result);
    //     setData(data);
    //   } catch (error){
    //     console.log(error);
    //   }
    // }

    // useEffect(()=> {
    //   fetchBlogDataFromSupabase();
    // }, []);

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>fetch Mid From Supabase Data</h2>
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

export default BlogsSupabasePages_27;