import VerticalDivider from "./VerticalDivider";

const GridLayout = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-5">
      {Array(5).fill(0).map((_, index) => (
        <VerticalDivider key={index} />
      ))}
    </div>
  );
};

export default GridLayout;
