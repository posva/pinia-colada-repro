export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 200));

  const result = [
    {
      id: 1,
      name: "Deck 1",
      description: "This is a deck",
      cardCount: 10,
    },
    {
      id: 2,
      name: "Deck 2",
      description: "This is another deck",
      cardCount: 3
    },
    {
      id: 3,
      name: "Deck 3",
      description: "This is the third deck",
      cardCount: 5,
    },
  ];

  return result;
});