// EventList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import EventList from "../../app/Component/Card/Event";

test("renders EventList component with provided props", () => {
  const eventProps = {
    date: "Aug 5",
    day: "Wednesday",
    title: "Gratiot Lake Road and Troy Graham to perform at Trust Fall Records",
    venue: "The Sinclair, Reed City",
    time: "8:00 AM",
    category: "Community Events",
  };

  const adImageSrc = "https://example.com/path/to/your/image.jpg";

  render(<EventList {...eventProps} adImageSrc={adImageSrc} />);

  // Assertions
  expect(screen.getByText("Community Events")).toBeInTheDocument();
  expect(screen.getByText("Aug 5")).toBeInTheDocument();
  expect(screen.getByText("Wednesday")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Gratiot Lake Road and Troy Graham to perform at Trust Fall Records"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("The Sinclair, Reed City")).toBeInTheDocument();
  expect(screen.getByText("8:00 AM")).toBeInTheDocument();
  expect(screen.getByText("Category:")).toBeInTheDocument();
  expect(screen.getByText("Community Events")).toBeInTheDocument();
  // Add more assertions based on your component content
});
