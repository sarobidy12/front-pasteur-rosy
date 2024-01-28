import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../../app/Component/Card/Teaching";

const mockData = {
  imageUrl: "https://example.com/image.jpg",
  title: "Test Title",
  description: "Test Description",
  link: `/enseignement/Test Title`,
};

describe("Card", () => {
  test("renders card with correct content", () => {
    render(<Card {...mockData} />);

    const titleElement = screen.getByText(mockData.title);
    const descriptionElement = screen.getByText(mockData.description);
    const linkElement = screen.getByRole("link", {
      description: `${mockData.description}`,
    });
    //  const imageElement = screen.getByAltText(mockData.title);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      `/enseignement/${mockData.title}`
    );
    //  expect(imageElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
