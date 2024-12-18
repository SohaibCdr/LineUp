import donepic from "../assets/done.jpg"
import ReactRating from "react-stars"
import defaultPic from "../assets/defaultPic.svg";
function ReviewCard ({ review , userInfo } ){
  
    return (
   
        <div className=" h-auto w-auto bg-white flex flex-col px-3 py-3 m-1  border rounded-md border-lightGry hover:shadow-md">
            {/* first section  */}
            <div className="flex  justify-between">
                <div  className="flex ">
                <div>
                    {review.logo ? (
                        <img src={review.logo} alt="" className="w-12  h-12 rounded-full" />
                    ) : (
                        <img src={defaultPic} alt="Default" className="w-12  h-12 rounded-full" />
                    )}
                    </div>
             <div className="flex flex-col ml-3">
                <p className="font-bold">
                   {review.name} 
                </p>
                <p className="text-[10px]">
                {review.date} 
                </p>

             </div>
                </div>
           
               {/* review  */}
        <div className=" flex  items-center">
            <div className="bg-costumGreen h-auto w-auto rounded-full  mr-1 ">
            <p className="text-[12px]">
            {review.rating.toFixed(1)}
            </p>
            </div>
            
            <ReactRating
           color2={'#1AD3A7'}
           value=   {review.rating}
           edit={false}
           />


        </div>
            </div>
            {/* second section  */}
            <div className="mt-1 px-2">
                <p className="text-xs leading-none">
                {review.comment} 
                </p>
            </div>
            

        </div>
      

    );



}
export default ReviewCard ;