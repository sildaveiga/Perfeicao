import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading veuillez patienter"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURMUdhA3Us879HzG_QyTwAEuga8r4qYT0TA&usqp=CAU"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ilha de Santiago</h1>
              <h2>{data[0]} propriétés</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/75/09/6d/20171204-132226-largejpg.jpg?w=500&h=300&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ilha de Sao Vicente</h1>
              <h2>{data[1]} propriétés</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/region/1680x560/60623.jpg?k=8d1f31e83f9861eacd430313cfcbf9345757bb7c1d9b1ad05935b09365bac664&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ilha de Sal</h1>
              <h2>{data[2]} ppropriétés</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
