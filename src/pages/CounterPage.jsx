import { useSelector, useDispatch } from "react-redux";

// action creator

export const increaseCounter = (number) => {
  return {type: 'INCREMENT', payload: number}
}

const CounterPage = () => {
  const val = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT', payload: 12})
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{val}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
