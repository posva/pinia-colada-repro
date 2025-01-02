// import { useRoute } from "vue-router";

type Deck = {
  id: number;
  name: string;
  description: string;
  cardCount: number;
};

export const useDeck = defineQuery(() => {
  // const route = useRouter().currentRoute;
  const route = useRoute();
  // const deckId = computed(() => Number(route.params.deckId));

  watchEffect(() => {
    console.log("DECK ID", toValue(route));
  });

  const rfetch = useRequestFetch();
  const result = useQuery({
    key: () => ["decks", { deckId: Number(toValue(route).params.deckId) }],
    query: () =>
      rfetch(
        `/api/decks?deckId=${Number(toValue(route).params.deckId)}`,
        {},
      ).then((decks) => {
        const deck = decks.find(
          (d) => d.id === Number(toValue(route).params.deckId),
        );
        console.log("GOT DECKS", toValue(route).params.deckId, deck);
        return deck;
      }) as Promise<Deck | undefined>,
  });

  /*const deckId = useRouteParams("deckId", '', { transform: Number });
  const result = useQuery({
    key: () => ["decks", { deckId: deckId.value }],
    query: () => useRequestFetch()(`/api/decks?deckId=${deckId.value}`).then(decks => {
      return decks.find(d => d.id === deckId.value);
    }) as Promise<Deck | undefined>,
  });*/

  return {
    ...result,
  };
});
