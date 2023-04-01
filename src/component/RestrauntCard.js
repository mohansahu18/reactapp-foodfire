import { IMG_CND_URL } from "../config";

const RestrauntCard = ({
  lastMileTravelString,
  cuisines,
  cloudinaryImageId,
  name, costForTwoString,

}) => {
  return (
    <div className=" cursor-pointer p-3 m-5 h-auto w-60 flex flex-col flex-wrap shadow-[-1px_5px_10px_5px_rgb(112,112,112,20%)] transform 
    transition duration-500 hover:scale-110 ">
      <img src={IMG_CND_URL + cloudinaryImageId} alt="logo" className="w-full h-32 rounded-lg" />
      <h4 className="font-bold">{name}</h4>
      <h5 className=" w-full break-words  break-normal text-justify text-xs font-medium ">{cuisines.join(",")}</h5>
      <span className="flex justify-around">
        <h6 className="font-mono font-normal">• {lastMileTravelString} </h6>
        <h4 className="font-mono font-normal text-gray-800">• {costForTwoString}</h4>
      </span>
    </div>
  );
};
export default RestrauntCard;
