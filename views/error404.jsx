const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div className="my-2">
          <div className="py-2">
            <img src="/images/404.jpg" alt="404 Error" />
          </div>
          <div className="py-2">
            Image from{" "}
            <a href="https://www.vectorstock.com/22271798">VectorStock</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
