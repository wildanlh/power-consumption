import React, { useState } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import Card from "./card";
import { motion } from "framer-motion";

const Form = () => {
  const [appName, setAppName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:4000/api/power-usage/${appName}.exe`
      );
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Error: Target application not found" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setAppName(event.target.value);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="appName"
              className="block mb-2 text-xl font-bold text-black"
            >
              Application Name
            </label>
            <input
              type="text"
              id="appName"
              value={appName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your application name"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Submit
          </motion.button>
        </form>
      </Card>
      {loading ? (
        <div className="mt-10">
          <Card>
            <div className="flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_uRDZ05.json"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          </Card>
        </div>
      ) : (
        result && (
          <div className="mt-10">
            {result.error ? (
              <Card>
                <div className="flex flex-col md:items-center md:flex-row justify-center">
                  <div>
                    <Player
                      autoplay
                      loop
                      src="https://assets7.lottiefiles.com/packages/lf20_ddxv3rxw.json"
                      style={{ height: "100px", width: "100px" }}
                      className="p-5"
                    />
                  </div>
                  <div>
                    <p className="text-red-600 text-xl font-bold md:text-left text-center">
                      {result.error}
                    </p>
                  </div>
                </div>
              </Card>
            ) : (
              <Card>
                <div className="flex items-center flex-row text-xl ">
                  <div className="pr-5">
                    <p>App Name </p>
                    <p>PID </p>
                    <p>Power Usage </p>
                  </div>
                  <div>
                    <p> : {result.appName}</p>
                    <p> : {result.pid}</p>
                    <p> : {result.powerUsage}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )
      )}
    </>
  );
};

export default Form;
