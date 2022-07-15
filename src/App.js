import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import axios from "axios";
import Events from "./Components/Events/Events";
import Search from "./Components/Search/Search";
import Loadmore from "./Components/Loadmore/Loadmore";
import Loading from "./Components/util/Loading";
function App() {
  const [eventData, setEventData] = useState([]);
  const [eventLimit, setEventLimit] = useState(8);
  const [eventStatus, setEventStatus] = useState(true);
  const [eventCount, setEventCount] = useState();
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios(
        ` https://manage-api.konfhub.com/hosted-events?limit=${eventLimit}&search_query=${searchItem}&past_events=${eventStatus}`
      );
      setEventData(result.data.events);
      setEventCount(result.data.count);
    };
    fetchEvents();
  }, [eventLimit, eventStatus, searchItem]);

  return (
    <div className="App">
      <Header />
      <Search
        getPastEvents={(status) => setEventStatus(status)}
        getSearchItem={(value) => setSearchItem(value)}
      />

      {eventData.length > 0 ? (
        <Events eventData={eventData} eventCount={eventCount} />
      ) : (
        <Loading searchItem={searchItem} />
      )}

      {eventData.length > 0 && (
        <Loadmore setLimit={setEventLimit} limit={eventLimit} />
      )}
    </div>
  );
}

export default App;
