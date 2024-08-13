
function Cards({item}) {
  return (
    <>
        <div className="card bg-base-100 w-92 dark:bg-slate-900 dark:text-white dark:border shadow-xl p-3 mx-1 my-8 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.author}</p>
    <div className="card-actions justify-between">
      <div className="py-2 px-5 rounded-full bg-gray-300">${item.price}</div>
      <div className="btn rounded-full hover:bg-pink-500 hover:text-white">BUY NOW</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Cards