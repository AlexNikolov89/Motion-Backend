export const postAction = () => async (dispatch, getState) => {
  const { token } = getState();

  // console.log("test", token);
  const config = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
  };
  const res = await fetch(
    "https://motion.propulsion-home.ch/backend/api/social/posts/",
    config
  );
  const data = await res.json();
  return data;
};
