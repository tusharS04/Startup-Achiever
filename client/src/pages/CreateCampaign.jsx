import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import {
  CustomButton,
  FormField,
  Loader,
  Navbar,
  Sidebar,
} from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/home");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row bg">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 bg">
        <Navbar />
        <div className="bg-[#c8ccf5] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {isLoading && <Loader />}
          <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#4a4a49] rounded-[10px]">
            <h3 className="font-epilogue sm:text-[25px] text-[18px] leading-[38px] text-white">
              <i>Take Your Business to the Next Level</i>
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-[65px] flex flex-col gap-[30px]"
          >
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Your Name *"
                placeholder=""
                value={form.name}
                handleChange={(e) => handleFormFieldChange("name", e)}
              />
              <FormField
                labelName="Campaign Title *"
                placeholder=""
                inputType="text"
                value={form.title}
                handleChange={(e) => handleFormFieldChange("title", e)}
              />
            </div>

            <FormField
              labelName="Description *"
              placeholder="Write Description of your Startup"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />

            <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
              <img
                src={money}
                alt="money"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                You will get 100% of the raised amount
              </h4>
            </div>

            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Goal *"
                placeholder="ETH 0.50"
                inputType="text"
                value={form.target}
                handleChange={(e) => handleFormFieldChange("target", e)}
              />
              <FormField
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e) => handleFormFieldChange("deadline", e)}
              />
            </div>

            <FormField
              labelName="Campaign image *"
              placeholder="Place image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("image", e)}
            />

            <div className="flex justify-center items-center mt-[20px]">
              <CustomButton
                btnType="submit"
                title="Submit Your Idea"
                styles="bg-[#1dc071]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
