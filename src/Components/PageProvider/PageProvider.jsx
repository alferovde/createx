import React from "react";
import { Skeleton, Button, Result, Image } from "antd";
import tower from "../../Images/RuinedTower3.png";
const PageProvider = ({ children, isError, isLoading }) => {
  // console.log("-isLoading->", isLoading);
  // console.log("-isError.result->", isError.result);
  // console.log("-isError.code->", isError.code);

  return (
    <>
      {isLoading ? (
        <div className="skeleton container">
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      ) : isError.result ? (
        <Result
          status="400"
          title={isError.code.code.split("_").join(" ")}
          subTitle={isError.code.message}
          extra={<Button type="primary">Back Home</Button>}
          icon={<Image width={200} src={tower} />}
        />
      ) : (
        <div> {children}</div>
      )}
    </>
  );
};

export default PageProvider;
