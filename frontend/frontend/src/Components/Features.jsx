let features = [
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
    {
        icon:"https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718466071/xxe8gxsiw3kz3eedv6yf.png",
        title:"Play Ground",
        desc:"Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
    },
]
function Features() {

    return (
        <>
            <div className="flex flex-wrap font-handlee container grid grid-cols-1 md:grid-cols-3">
                {features.map((feature)=>{
                    return(
                        <>
                        <div className="flex bg-slate-100 p-[30px]  text-cyan-900 shadow-md m-2">
                            <div>
                                <img src={feature.icon} className="w-24 m-2" alt="" />
                            </div>
                            <div className="m-2 ms-6">
                                <p className="text-[1.5rem] font-bold">{feature.title}</p>
                                <p className="text-[1rem] font-Nunito">{feature.desc}</p>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Features;