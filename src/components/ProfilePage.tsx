import react, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function ProfilePage() {
  const [username, setUsername] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [locatione, setLocatione] = useState<string>("");
  const [descriptione, setDescriptione] = useState<string>("");
  const [locwant, setLocWant] = useState<boolean>(false);
  const [descwant, setDescWant] = useState<boolean>(false);

  useEffect(() => {
    const userid = localStorage.getItem("user_id");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get(`http://localhost:8000/getProfileData/:${userid}`, config)
      .then((response) => {
        setUsername(response.data.username);
        setLocatione(response.data.location);
        setDescriptione(response.data.description);
      });
  }, [locwant, descwant]);

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 56,
        height: 56,
      },

      children: `${name.split(" ")[0][0]}`,
    };
  }

  const setLoc = (event: any) => {
    setLocation(event.target.value);
  };

  const setDesc = (event: any) => {
    setDescription(event.target.value);
  };

  const setLocw = () => {
    setLocWant(!locwant);
  };

  const setDescw = () => {
    setDescWant(!descwant);
  };

  const submitLoc = () => {
    const userid = localStorage.getItem("user_id");
    const locati = location;

    const data = {
      id: userid,
      location: locati,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .post("http://localhost:8000/setloc", data, config)
      .then((response) => {
        setLocw();
      });
  };

  const submitDesc = () => {
    const userid = localStorage.getItem("user_id");
    const desci = description;

    const data = {
      id: userid,
      description: desci,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .post("http://localhost:8000/setdesc", data, config)
      .then((response) => {
        setDescw();
      });
  };

  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/man-deadlift-1296x728-header.jpg?w=1155&h=1528')",
            }}
          ></div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-coollightdark w-full mb-6 shadow-xl rounded-lg -mt-64 justify-center">
              <div className="px-6 justify-center">
                <Stack
                  direction="row"
                  spacing={2}
                  className="text-center justify-center mt-10"
                >
                  <Avatar {...stringAvatar(username)} />
                </Stack>

                <div className="text-center mt-5">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-white mb-2">
                    {username}
                  </h3>

                  <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase ">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
                    {locwant ? (
                      <input
                        type="text"
                        className="py-2 rounded-lg bg-coollightdark border-white color-white mb-4 px-1"
                        placeholder="Enter New Location"
                        value={location}
                        onChange={setLoc}
                      />
                    ) : (
                      <>{locatione}</>
                    )}

                    {locwant ? (
                      <button
                        className="ml-3 bg-coolotherpurple p-2 rounded-lg"
                        onClick={submitLoc}
                      >
                        Save location
                      </button>
                    ) : (
                      <button
                        className="ml-3 bg-coolotherpurple p-2 rounded-lg"
                        onClick={setLocw}
                      >
                        Change location
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-white text-center">
                  <div
                    className={descwant ? "" : "flex flex-wrap justify-center"}
                  >
                    <div
                      className={
                        descwant ? "flex flex-col " : "w-full lg:w-9/12 px-4"
                      }
                    >
                      {descwant ? (
                        <textarea
                          className="py-2 rounded-lg bg-coollightdark border-white color-white mb-10"
                          placeholder="Edit description"
                          rows={4}
                          cols={50}
                          style={{ color: "white" }}
                          value={description}
                          onChange={setDesc}
                        ></textarea>
                      ) : (
                        <p className="mb-4 text-lg leading-relaxed text-white">
                          {descriptione}
                        </p>
                      )}

                      {descwant ? (
                        <button
                          className="bg-coolotherpurple text-white p-2 rounded-lg"
                          onClick={submitDesc}
                        >
                          Save Description
                        </button>
                      ) : (
                        <button
                          className="bg-coolotherpurple text-white p-2 rounded-lg"
                          onClick={setDescw}
                        >
                          Change Description
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
