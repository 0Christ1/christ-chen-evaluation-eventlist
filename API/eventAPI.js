const eventAPI = (() => {
  // API server
  const BASE_EVENT_API = 'http://localhost:3000/events';

  const fetchEventsAPI = async () => {
    return await fetch(BASE_EVENT_API).then((res) => res.json());
  };

  const postEventAPI = async (newEvent) => {
    return fetch(BASE_EVENT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  const putEventAPI = async (id, newEvent) => {
    return await fetch(`${BASE_EVENT_API}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  const deleteEventAPI = async (id) => {
    return fetch(`${BASE_EVENT_API}/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  };

  return {
    fetchEventsAPI,
    postEventAPI,
    deleteEventAPI,
    putEventAPI,
  };
})();
