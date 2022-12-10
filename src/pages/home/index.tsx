import React from "react";

interface IProps {}

const HomePage: React.FC<IProps> = (props) => {
  return (
    <>
      <h1>This is a frontend microservice architecture</h1>
      <h3>This app consists of three separate parts(aka microfrontend)</h3>
      <div id="part-two">Part Two in ReactJS</div>
      <h3>
        Powered by:{" "}
        <a href="https://single-spa.js.org/">https://single-spa.js.org/</a>
      </h3>
    </>
  );
};

export default HomePage;
