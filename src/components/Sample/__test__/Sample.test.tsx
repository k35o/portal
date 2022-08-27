import { Sample } from "@/components/Sample";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("SampleComponent", () => {
  test("having header", () => {
    render(<Sample />);
    expect(screen.getByRole('heading')).toHaveTextContent('Sample Component')
  });
});