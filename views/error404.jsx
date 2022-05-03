const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div>
          <img src="/images/404.jpg" alt="404 Error" />
          <div>
            Photo by <a href="https://www.pixar.com/sadDFaswdQ">PIXAR</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
