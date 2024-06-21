const eventAPI = ((param) => {
  // API server
  const BASE_EVENT_API = 'http://localhost:3000/events';

  const fetchEventsAPI = async () => {
    return fetch(BASE_EVENT_API).then((res) => res.json());
  };

  const postEventsAPI = async (newEvent) => {
    return fetch(BASE_EVENT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  const putEventsAPI = async (id, newEvent) => {
    return fetch(`${BASE_EVENT_API}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  const deleteEventsAPI = async (eventId) => {
    return fetch(`${BASE_EVENT_API}/${eventId}`, {
      method: 'DELETE',
    });
  };

  return {
    fetchEventsAPI,
    postEventsAPI,
    deleteEventsAPI,
  };
})();
