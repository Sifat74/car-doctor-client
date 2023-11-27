import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute gap-2 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full lg:pt-32 lg:pl-20 pt-6 pl-6">
                        <div className='w-3/4 lg:w-1/3 flex flex-col gap-3 lg:gap-6'>
                            <h2 className='text-xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-white text-sm lg:text-lg'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex gap-4 lg:mt-6'>
                                <button className='bg-[#ff3811] btn border-0 text-xs lg:text-lg text-white font-normal hover:bg-black'>Discover More</button>
                                <button className='btn btn-outline text-white text-xs lg:text-lg font-normal'>
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-12">
                        <a href="#slide4" className="btn btn-circle bg-[#ff3811] border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#ff3811]  border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute gap-2 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full lg:pt-32 lg:pl-20 pt-6 pl-6">
                        <div className='w-3/4 lg:w-1/3 flex flex-col gap-3 lg:gap-6'>
                            <h2 className='text-xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-white text-sm lg:text-lg'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex gap-4 lg:mt-6'>
                                <button className='bg-[#ff3811] btn border-0 text-xs lg:text-lg text-white font-normal hover:bg-black'>Discover More</button>
                                <button className='btn btn-outline text-white text-xs lg:text-lg font-normal'>
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-12">
                        <a href="#slide1" className="btn btn-circle bg-[#ff3811] border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute gap-2 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full lg:pt-32 lg:pl-20 pt-6 pl-6">
                        <div className='w-3/4 lg:w-1/3 flex flex-col gap-3 lg:gap-6'>
                            <h2 className='text-xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-white text-sm lg:text-lg'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex gap-4 lg:mt-6'>
                                <button className='bg-[#ff3811] btn border-0 text-xs lg:text-lg text-white font-normal hover:bg-black'>Discover More</button>
                                <button className='btn btn-outline text-white text-xs lg:text-lg font-normal'>
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-12">
                        <a href="#slide2" className="btn btn-circle bg-[#ff3811] border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute gap-2 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full lg:pt-32 lg:pl-20 pt-6 pl-6">
                        <div className='w-3/4 lg:w-1/3 flex flex-col gap-3 lg:gap-6'>
                            <h2 className='text-xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-white text-sm lg:text-lg'>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div className='flex gap-4 lg:mt-6'>
                                <button className='bg-[#ff3811] btn border-0 text-xs lg:text-lg text-white font-normal hover:bg-black'>Discover More</button>
                                <button className='btn btn-outline text-white text-xs lg:text-lg font-normal'>
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-12">
                        <a href="#slide3" className="btn btn-circle bg-[#ff3811] border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;