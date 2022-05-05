const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div>
          <img src="/images/404.jpg" alt="404 Error" />
          <div>
            Image from <a href="https://www.vectorstock.com/22271798">VectorStock</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
