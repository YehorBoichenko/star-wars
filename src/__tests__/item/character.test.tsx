import { render } from "@testing-library/react";
import CharacterItem from "@/components/cards/item/item";
import { mockGetCharacterData } from "@/data/mock/actionsData";

describe("CharacterItem component", () => {
  it("renders character details correctly", () => {
    const { getByText } = render(<CharacterItem character={mockGetCharacterData} />);

    const nameElement = getByText(mockGetCharacterData.name);
    const genderElement = getByText(`Gender: ${mockGetCharacterData.gender}`);
    const birthYearElement = getByText(`Birth Year: ${mockGetCharacterData.birth_year}`);
    expect(nameElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();
    expect(birthYearElement).toBeInTheDocument();
  });

  it("links to the correct character page", () => {
    const { container } = render(<CharacterItem character={mockGetCharacterData} />);

    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveAttribute("href", `/characters/${mockGetCharacterData.id}`);
  });
});
