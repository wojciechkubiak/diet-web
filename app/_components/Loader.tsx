import { ColorRing } from "react-loader-spinner";

export enum LoaderSize {
  LARGE = "320",
  SMALL = "80",
}

interface LoaderProps {
  size?: LoaderSize;
}

const Loader: React.FC<LoaderProps> = ({ size = LoaderSize.SMALL }) => {
  return (
    <div>
      <ColorRing
        visible={true}
        height={size}
        width={size}
        colors={["#34d399", "#d1fae5", "#34d399", "#d1fae5", "#34d399"]}
      />
    </div>
  );
};

export default Loader;
