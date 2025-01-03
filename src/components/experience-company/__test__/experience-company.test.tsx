import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ExperienceCompany, ExperienceCompanyProps } from "../experience-company";

vi.mock("./src/components", () => ({
  Position: ({ positionDescription }: { positionDescription: string }) => (
    <div data-testid="position">{positionDescription}</div>
  ),
}));

describe("ExperienceCompany Component", () => {
  const defaultProps: ExperienceCompanyProps = {
    imageSrc: "https://example.com/logo.png",
    imageAlt: "Company Logo",
    positionList: [
      {
       positionDescription: "Frontend Developer",
       position: "",
       companyNameAndTime: "",
       dates: "",
       location: ""
      },
      {
       positionDescription: "Backend Developer",
       position: "",
       companyNameAndTime: "",
       dates: "",
       location: ""
      },
    ],
  };

  it("should render the image with correct attributes", () => {
    render(<ExperienceCompany {...defaultProps} />);

    const image = screen.getByRole("img", { name: "Company Logo" });
    expect(image).toBeDefined();
    expect(image.getAttribute("src")).toBe("https://example.com/logo.png");
    expect(image.getAttribute("alt")).toBe("Company Logo");
    expect(image.getAttribute("loading")).toBe("lazy");
    expect(image.getAttribute("width")).toBe("64");
    expect(image.getAttribute("height")).toBe("64");
  });

  it("should render no positions if positionList is empty", () => {
    render(<ExperienceCompany imageSrc="https://example.com/logo.png" imageAlt="Company Logo" />);
    const positions = screen.queryByTestId("position");
    expect(positions).toBeNull();
  });
});