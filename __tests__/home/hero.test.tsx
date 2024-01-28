// components/Hero.test.js
import { render } from "@testing-library/react";
import Hero from "../../app/Home/Hero";


test("renders Hero component with correct content", () => {
  const { getByText, getByAltText } = render(<Hero />);

  // Check if the component renders the name correctly
  const nameElement = getByText("Pasteur Rosy Mihigo MBALA");
  expect(nameElement).toBeInTheDocument();

  // Check if the component renders the description correctly
  const descriptionElement = getByText(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore " +
      "doloremque id ipsam commodi a quod tenetur quos fuga, blanditiis neque " +
      "quisquam ipsum assumenda omnis cupiditate ipsa atque nemo accusamus nisi."
  );
  expect(descriptionElement).toBeInTheDocument();

  // Check if the component renders the image correctly
  const imageElement = getByAltText("Pasteur Rosy mohigo");
  expect(imageElement).toBeInTheDocument();
});
