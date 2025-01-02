<script setup lang="ts">
import { useDeck } from "~/queries/decks";

const route = useRoute("deck-deckId");
const { asyncStatus, state } = useDeck();
</script>

<template>
  <div>
    <h1>Deck - {{ route.params.deckId }}</h1>

    <div>AsyncStatus: {{ asyncStatus }}</div>

    <div v-if="state.status === 'pending'">Loading...</div>
    <div v-else-if="state.status === 'error'">
      Error fetching: {{ state.error }}
    </div>
    <div v-else>
      <template v-if="state.data">
        <pre>{{ JSON.stringify(state.data, null, 2) }}</pre>
      </template>
      <template v-else>
        <div>No deck found</div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
