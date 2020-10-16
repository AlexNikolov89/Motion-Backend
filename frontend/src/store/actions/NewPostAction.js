export const NewPostAction = (content) => async (dispatch, getState) => {
  const { token } = getState();

  const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
  const config = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify({ content }),
  };
  const response = await fetch(url, config);
  const data = await response.json();
  return data;
};

export default NewPostAction;
