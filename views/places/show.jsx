const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main className="my-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 my-2">
              <img src={data.place.pic} class="img-responsive img-resize" />
            </div>
            <div className="col-md-5 my-2">
              <h1 className="rest-name">{data.place.name}</h1>
              <h3>Founded</h3>
              <p>{data.place.founded}</p>
              <h3>Rating</h3>
              <p>No rating yet...</p>
              <h3>Description</h3>
              <p>
                Located in {data.place.city}, {data.place.state} serving{" "}
                {data.place.cuisines}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="my-3 py-3 card text-center">
                <div className="card-body">
                  <h3>Comments</h3>
                  <p>No comments yet...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            <a href={`/places/${data.id}/edit`} className="btn btn-secondary">
              Edit
            </a>
          </div>
          <div className="my-2">
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-secondary my-2">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
