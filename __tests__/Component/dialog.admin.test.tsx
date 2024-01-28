// src/components/Modal.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../../app/admin/Component/Dialog";

describe("Modal component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Modal open={true} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    expect(getByTestId("modal-content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();

    const { getByLabelText } = render(
      <Modal open={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByLabelText("Close Modal"));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
