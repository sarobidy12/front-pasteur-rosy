import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AudioPlayer from "../../app/Component/Audio";

const url_audio =
  "https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.ogg";

// Mock the global Audio constructor
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("AudioPlayer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(React, "useState").mockReturnValue([jest.fn(), jest.fn()]);
  });

  test("renders without errors", () => {
    const { getByText } = render(<AudioPlayer audioSrc={url_audio} />);
    const playButton = getByText("Pause");
    expect(playButton).toBeInTheDocument();
  });

//   test("toggles between play and pause when the button is clicked", () => {
//     const { getByText } = render(<AudioPlayer audioSrc={url_audio} />);
//     const playButton = getByText('Pause');
//     fireEvent.click(playButton);
//     expect(playButton).toHaveTextContent('Pause');
//   });

});
