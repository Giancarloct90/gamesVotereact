export const URL_API = "http://localhost:4000/";

export const getData = async () => {
  try {
    let response = await fetch(`${URL_API}API/games`);
    let data = await response.json();
    return data;
  } catch (e) {
    console.log("error with server", e);
    return { ok: false, message: "erro trying to get info from server" };
  }
};

export const handleFormGame = async (values, resetForm, setFlag) => {
  resetForm();
  // console.log(values);

  const formData = new FormData();
  formData.append("nombre", values.nombre);
  formData.append("image", values.file1);

  try {
    let response = await fetch(`${URL_API}API/games`, {
      method: "POST",
      body: formData,
    });
    let response2 = await response.json();
    // console.log(response2);
    if (!response2.ok) {
      return console.log("error");
    }
    console.log("inserted");
    setFlag((prevFlag) => (prevFlag += 1));
  } catch (e) {
    console.log(e);
  }
};

export const handleDeleteGame1 = async (id) => {
  let formData = new FormData();
  formData.append("id", id);
  try {
    let res = await fetch(`${URL_API}API/games/`, {
      method: "PUT",
      body: formData,
    });
    let response = await res.json();
    return response;
  } catch (e) {
    console.log("Error");
    return {
      ok: false,
      message: "erro with server",
    };
  }
};

export const handleGameById = async (id) => {
  try {
    let res = await fetch(`${URL_API}API/games/${id}`);
    let response = await res.json();
    // console.log(res);
    return response;
  } catch (e) {
    console.log("erro triying to get one games");
    return { ok: false, message: "error trying to get one game" };
  }
};

export const handleSearch = async (games, searchTxt, setData) => {
  // console.log(games);
  // console.log(searchTxt);

  let gamesFounds = games.filter(
    (game) => game.nombre.toUpperCase().indexOf(searchTxt.toUpperCase()) !== -1
  );
  // console.log(gamesFounds);
  setData({ gameDB: gamesFounds });
  // let gamesFounds = games.filter((game) => {});
};
