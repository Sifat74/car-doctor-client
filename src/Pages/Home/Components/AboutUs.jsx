import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="my-32 container mx-auto flex gap-20">
            <div className='w-full relative h-[700px] '>
                <img className='w-3/4 absolute' src={img1} alt="" />
                <img className='w-1/2 absolute bottom-0 right-0 border-8 border-white rounded-xl' src={img2} alt="" />
            </div>
            <div className='w-full flex flex-col gap-10'>
                <h2 className='text-xl text-[#ff3811] font-bold'>About Us</h2>
                <div className='w-2/3'>
                    <p className='text-5xl font-semibold'>We are qualified & of experience in this field</p>
                </div>
                <p className='text-xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                    <br /><br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                </p>
                <button className='btn bg-[#ff3811] text-white w-32'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;