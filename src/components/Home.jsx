import { useState } from "react";
import Axios from "axios";
import pre from '../pre.gif';

export default () => {

    const [singCard, setSingCard] = useState(true);
    const [img, setImg] = useState("");
    const [isLoading , setisLoading] = useState(false);
    const RandomCat = () => {

        setisLoading(true);
        const url = "https://api.thecatapi.com/v1/images/search";
        const config = {
            headers: {
                "x-api-key": process.env.REACT_APP_API_KEY_CAT
            }
        };
        Axios.get(url, config)
            .then(res => {
                console.log(res.data[0])
                setImg(res.data[0].url)
                if(res.data[0].height > res.data[0].width)
                    RandomCat();
                setisLoading(false);
            })
            .catch(err=> console.log(err))
    }

    const RandomDog = () => {
        
        setisLoading(true);
        const url = "https://api.thedogapi.com/v1/images/search";
        const config = {
            headers: {
                "x-api-key": process.env.REACT_APP_API_KEY_DOG
            }
        };
        Axios.get(url, config)
            .then(res => {
                console.log(res.data[0])
                setImg(res.data[0].url)
                if(res.data[0].height > res.data[0].width)
                    RandomCat();
                setisLoading(false);
            })
            .catch(err=> console.log(err))
    }

    return (
        <>
            <div className="bg-background h-screen flex content-center ">

                <div className="flex-auto flex-col border-3">
                            
                            <div onClick={RandomCat} className="grow mx-auto border-2 w-[189px] mt-[130px] h-[40px] bg-btn focus:bg-btn-pressed onc rounded-full text-btn-text px-5 pt-[5px]">
                                Random Cat
                            </div>
             
      
                            <div onClick={RandomDog} className="grow mx-auto mt-[20px] w-[189px] h-[40px] bg-btn rounded-full text-btn-text px-5 pt-[5px]">
                                Random Dog
                            </div>
                
             
                            <div className="grow mx-auto mt-[20px] w-[189px] h-[40px] bg-btn rounded-full text-btn-text px-5 pt-[5px]">
                                Fillter by breed
                            </div>
                    
                </div>

                <div className="flex-auto w-[700px] border-4 border-black">
                    {/* single card */}
                    
                    <div className="flex-auto mx-auto mt-[100px] w-[700px] h-[500px] border-4 border-black rounded-[35px]">
                
                        <img src={pre} className= {isLoading ? "w-full h-full rounded-[35px]":"hidden"}/>
                        <img src={img} className= {isLoading ? "hidden":"w-full h-full rounded-[35px]"} />
                    </div>
                </div>

            </div>

        </>

    );
}