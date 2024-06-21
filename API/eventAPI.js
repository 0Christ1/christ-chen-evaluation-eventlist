const eventAPI = ((param) => {
  // API server
  const BASE_EVENT_API = 'http://localhost:3000/events';

  const fetchEventsAPI = async () => {
    return fetch(BASE_EVENT_API).then((res) => res.json());
  };

  return {
    fetchEventsAPI,
  };
})();
