import list from '../list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebooks() {

  const filteredList = list.filter((item) => item.category === 'free');

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
          {filteredList.map((item) => {
            return <Cards item={item} key={item.id} />
          })}
        </Slider>
      </div>

    </>
  )
}

export default Freebooks