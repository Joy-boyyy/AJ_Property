import { useEffect, useState, useContext } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { ContextData } from "../../Context/ContextApi";

const HomeImgSlider = () => {
  const { myContextData } = useContext(ContextData);

  const [myState, setState] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setState((prevState) =>
        prevState < myContextData.length - 1 ? prevState + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextFun = () => {
    setState((prevSt) => {
      return prevSt < myContextData.length - 1 ? prevSt + 1 : 0;
    });
  };

  const prevFun = () => {
    setState((prevSt) => {
      return prevSt > 0 ? prevSt - 1 : myContextData.length - 1;
    });
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="w-[100%] h-[100%]" style={{ position: "relative" }}>
        <span
          className="bg-white p-4 rounded-full cursor-pointer absolute top-[45%] lg:top-[85%] lg:right-[-5%] right-[5%]"
          onClick={nextFun}
        >
          <MdNavigateNext size={40} color="#00B98E" />
        </span>
        <img
          src={myContextData[myState].propertyImg}
          alt={`imgss- ${myContextData[myState].imgName}`}
          className="w-[100%] h-[100%] object-cover"
        />
        <span
          className="bg-white p-4 rounded-full cursor-pointer absolute top-[70%] lg:right-[-5%] right-[5%]"
          onClick={prevFun}
        >
          <GrFormPrevious size={40} color="#00B98E" />
        </span>
      </div>
    </div>
  );
};

export default HomeImgSlider;
