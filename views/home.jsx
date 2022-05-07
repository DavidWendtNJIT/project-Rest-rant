const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main className="my-2">
        <h1>REST-Rant</h1>
        <div>
          <img
            className="rest-main"
            src="images/rest_main.jpg"
            alt="Main Restaurant Picture"
          />
          <div>
            <p className="photoCred">
              Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
              <a href="UNSPLASH_LINK">Unsplash</a>
            </p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
