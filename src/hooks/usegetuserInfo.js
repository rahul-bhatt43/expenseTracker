export const usegetuserInfo = () => {
  const { name, photoURL, isAuth, userId } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { name, photoURL, isAuth, userId };
};
