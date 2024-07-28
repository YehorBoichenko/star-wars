// "use client";
// import { FC, useCallback, useEffect, useState } from "react";
// import CharacterList from "@/components/cards/list/list";
// import useCharacters from "@/hooks/useCharacters";
// import { debounce } from "@/helpers/debounce";
// import Notification from "@/components/ui/notification";
// import SearchBar from "@/components/ui/searchbar";
// import Loader from "@/components/ui/loader";
// import Title from "@/components/ui/title";
// import { characterProperties } from "@/components/cards/list/searching-params";

// const CharactersPage: FC = () => {
//   const { charactersList, hasNextPage, loading, errorMessage, loadMorePeople } = useCharacters();
//   const [filteredCharacters, setFilteredCharacters] = useState(charactersList);

//   const handleSearch = (searchTerm: string) => {
//     const lowercasedTerm = searchTerm.toLowerCase();
//     const filtered = lowercasedTerm
//       ? charactersList.filter(character => {
//           return characterProperties.some(property =>
//             character[property]?.toString().toLowerCase().includes(lowercasedTerm)
//           );
//         })
//       : charactersList;
//     setFilteredCharacters(filtered);
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const handleScroll = useCallback(
//     debounce(() => {
//       if (loading || !hasNextPage) return;
//       const isBottom =
//         window.innerHeight + document.documentElement.scrollTop >=
//         document.documentElement.offsetHeight - 50;
//       if (isBottom) {
//         loadMorePeople();
//       }
//     }, 200),
//     [loading, hasNextPage, loadMorePeople]
//   );

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   useEffect(() => {
//     setFilteredCharacters(charactersList);
//   }, [charactersList]);

//   return (
//     <div className="flex flex-col items-center gap-6 p-6 bg-black">
//       <Title as="h2" className="mt-8 text-white">List of characters of the far far galaxy</Title>
//       <SearchBar
//         testId="home-search-bar"
//         onSearch={handleSearch}
//         placeholder="Searching by all parameters"
//         className="my-3 w-[650px] border-gold glowing-border"
//       />
//       {errorMessage && <Notification notification={errorMessage} isError={true} />}
//       <CharacterList character={filteredCharacters} />
//       {loading && <Loader />}
//     </div>
//   );
// };

// export default CharactersPage;
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import CharacterList from "@/components/cards/list/list";
import useCharacters from "@/hooks/useCharacters";
import { debounce } from "@/helpers/debounce";
import Notification from "@/components/ui/notification";
import SearchBar from "@/components/ui/searchbar";
import Loader from "@/components/ui/loader";
import Title from "@/components/ui/title";
import { characterProperties } from "@/components/cards/list/searching-params";

const CharactersPage: FC = () => {
  const { charactersList, hasNextPage, loading, errorMessage, loadMorePeople } = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState(charactersList);

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = lowercasedTerm
      ? charactersList.filter(character => {
          return characterProperties.some(property =>
            character[property]?.toString().toLowerCase().includes(lowercasedTerm)
          );
        })
      : charactersList;
    setFilteredCharacters(filtered);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    debounce(() => {
      if (loading || !hasNextPage) return;
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50;
      if (isBottom) {
        loadMorePeople();
      }
    }, 200),
    [loading, hasNextPage, loadMorePeople]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setFilteredCharacters(charactersList);
  }, [charactersList]);

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-black">
      <Title as="h2" className="mt-8 text-white">List of characters of the far far galaxy</Title>
      <SearchBar
        testId="home-search-bar"
        onSearch={handleSearch}
        placeholder="Searching by all parameters"
        className="my-3 w-[650px] border-gold glowing-border"
      />
      {errorMessage && <Notification notification={errorMessage} isError={true} />}
      {loading ? (
        <Loader />
      ) : (
        <CharacterList character={filteredCharacters} />
      )}
    </div>
  );
};

export default CharactersPage;
