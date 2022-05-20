const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <p className="inactive">No comments yet!</p>;
  let rating = <p className="inactive">Not yet Rated</p>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐";
    }
    rating = <p>{stars}</p>;
    comments = data.place.comments.map((c) => {
      return (
        <div className="border bg-white">
          <h5 id="rating">Rating: {c.stars}</h5>
          <h6 className="rant">{c.rant ? "Thumbs Down!" : "Thumbs Up!"}</h6>
          <p>{c.content}</p>
          <h6>
            <stong>- {c.author}</stong>
          </h6>
          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-secondary"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main className="my-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 my-2">
              <img src={data.place.pic} class="img-responsive img-resize" />
            </div>
            <div className="col-md-5">
              <h1 className="rest-name">{data.place.name}</h1>
              <h3 className="my-0">Founded</h3>
              <p>{data.place.founded}</p>
              <hr className="my-0"></hr>
              <h3 className="my-0">Rating</h3>
              <p className="my-0">{rating}</p>
              <hr className="my-0"></hr>
              <h3 className="my-0">About</h3>
              <p>
                Located in {data.place.city}, {data.place.state} serving{" "}
                {data.place.cuisines}
              </p>

              <a href={`/places/${data.place.id}/edit`} className="btn btn-secondary">
                Edit
              </a>
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-secondary my-2">
                  Delete
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card text-bg-light">
                <div className="card-header">
                  <h3>Reviews</h3>
                  <div className="card-body">{comments}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <h3>Leave a Review Here!</h3>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label for="content">Tell us what you think!</label>
                  <textarea
                    id="content"
                    name="content"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label for="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div id="slidecontainer" className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input
                    type="range"
                    step="0.5"
                    min="1"
                    max="5"
                    id="stars"
                    name="stars"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-4 my-4">
                  <div className="row">
                    <input
                      type="radio"
                      id="rant"
                      name="rant"
                      value="thumbsDown"
                    />
                    <label for="rant">Thumbs Down?</label>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-secondary my-2"
                value="Submit Review"
              />
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
