const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>REST-Rant</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@500&family=Oleo+Script&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul id="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>

        {html.children}
      </body>
      <div id="footer">
        <p id="footer-text">
          Created by: David Wendt{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DavidWendtNJIT"
          >
            <img id="github" alt="Github" src="/images/GitHub.png" />
          </a>
        </p>
      </div>
    </html>
  );
}

module.exports = Def;
