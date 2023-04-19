import {useState} from 'react';
import Wrapper from '../assets/wrapper/Blogs_27';
import { useDemoContext_27 } from '../context/DemoContext_27';

const BlogsStaticPages_27 = () => {
    // const [ name, setName] = useState('陳信安');
    // const [id , setId] = useState('210417027');
    const {pName, pId, blogs} = useDemoContext_27();

    return(
        <Wrapper>
        <section className="blogs">
      <div className="section-title">
        <h2>{pName} {pId}</h2>
      </div>
      <div class="blogs-center2">
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main4.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Pork 上選豬肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main8.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-globe"></i></span>
            <h3>Chicken Breast 低脂雞肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main3.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Pork Shoulder  梅花豬肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/hotpot15.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Vegetarian 清香素食鍋(全素)</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main7.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Lamb 上選羊肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main2.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot <i class="fa-solid fa-globe"></i></span>
            <h3>BeefBelly   培根牛肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/main6.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>HotPot<i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Pork Belly 培根豬肉鍋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/egg.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>sideMeal <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Egg 蛋</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="https://xuwztydqqoyqwrjsgfbd.supabase.co/storage/v1/object/public/demo-27/mid_27/recommend5.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>else <i class="fa-solid fa-mug-saucer"></i></span>
            <h3>Lobster Salad Ball 龍蝦沙拉丸</h3>
            <p>Can choose A or B. A is more meat ,B is more vegetables.</p>
            <a href="#">read more</a>
          </div>
        </article>
      </div>
    </section>
        </Wrapper>
    )
}

export default BlogsStaticPages_27;