import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Freebooks() {

    const [book,setBook] = useState([]);
  
  useEffect(()=>{

    const getBooks = async()=>{
      
      try {
        
        const res = await axios.get("http://localhost:4001/book");
        const books = res.data.data.books;
        const filteredBooks = books.filter((item)=> item.category === 'free');
        console.log(res.data);
        setBook(filteredBooks);
        console.log(filteredBooks)
        
      } catch (error) {
        console.log(error);
      }
    }

    getBooks()

  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-width-screen-2xl container mx-auto px-4 md:px-20 dark:bg-slate-900 dark:text-white'>
        <h1 className='font-semibold text-lg'>Free Offered Books</h1>
        <p className='mt-3'>We provide 100% free e-books that you can read without any need for registration. For more books please
        register with us and access more premuim books. </p>
        <Slider {...settings}>
          {book.map((item) => {
            return <Cards item={item} key={item.id} />
          })}
        </Slider>
      </div>

    </>
  )
}

export default Freebooks