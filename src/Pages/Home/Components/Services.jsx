import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-32 container mx-auto">
            <div className="text-center flex flex-col gap-4">
                <h2 className="text-xl text-[#ff3811] font-bold">Services</h2>
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-20">
                {
                    services.map(service =>
                        <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt="Shoes" className="rounded-xl h-52" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.title}</h2>
                                <p className="font-bold text-[#ff3811]">Price: ${service.price}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#ff3811] hover:bg-black text-white">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;