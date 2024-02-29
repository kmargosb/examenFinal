import { useEffect, useState } from 'react'

const Ejercicio4 = () => {

  const [coffeeData, setCoffeeData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        const originalProducts = [...data.products];
        originalProducts.sort((a, b) => (a.available && !b.available ? -1 : !a.available && b.available ? 1 : a.price - b.price));
        setCoffeeData(originalProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);



  return (
    <div className='pt-16'>
      <div className='flex flex-col justify-center items-center gap-6 p-10'>
        <h2 className='text-GreenAll font-medium text-[24px] leading-7'>Últimos orígenes</h2>
        <div
          className='flex flex-wrap gap-6 w-[1200px]'>
          {coffeeData?.slice(0, limit).map((data, i) => {
            return (
              <CoofeeCards key={i}
                price={data.price}
                name={data.brand}
                available={data.available}
                img={data.img_url}
                id={data._id}
                add={() => handleAddToCart(data)} />
            )
          })}
        </div>
      </div>
      <SectionCards />
      <SectionFooter />
    </div>
  )
}

export default Ejercicio4

