import { Circles } from "react-loader-spinner";

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "300px",
  
};

export const Loading = () => {
  return (
    <div style={loaderStyle}>
      <Circles
        height="120"
        width="120"
        color="rgb(152, 135, 113)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};