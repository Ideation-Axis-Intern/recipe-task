import food from "/assets/jollofrice.jpg";

const Advertisement = () => {
    return(
        <div  className='min-h-[550px]  flex justify-center items-center py-12 '>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-yellow-500'>
                <div className='p-6 sm:p-8 '>
                    <p data-aos="slide-right" className='font-bold text-xl'>From Kitchen to Table</p>
                    <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-6xl font-bold '>Where Every Recipe Tells </h1>
                    <p data-aos="fade-up" className='text-sm font-bold'>a Story</p>
                </div>
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img src={food} alt="" className='scale-125 w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-xl mx-auto drop-shadow-2xl object-cover '/>
                </div>
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8 '>
                    <p  className='font-bold text-xl'>Feed Your Passion</p>
                    <p className='text-3xl sm:text-5xl font-bold'>Discover Endless Culinary</p>
                    <p className='text-sm tracking-wide leading-5 font-bold'>Delights</p>
                    <div>
                        <button className='btn text-base-content hover:scale-110 hover:bg-white duration-500 ease-linear font-semibold text-xl py-2 px-4 rounded-full '>Learn more...</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )

}
export default Advertisement