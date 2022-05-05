const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={data.place.pic} class="img-fluid" />
            </div>
            <div className="col-md-5">
              <h1>{data.place.name}</h1>
              <h2 className="mt-5">Rating</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>Description</h2>
              <p className="mt4">
                Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="bg-secondary text-white my-3 py-3 card text-center">
                <div className="card-body">
                  <h2>Comments</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
