<script lang="ts">
   import { formatNumber } from "../gamelogic/utils";
   import {
      clickTheButton,
      getButtonClickValue,
   } from "../gamelogic/moneybutton";

   function buttonClick() {
      clickTheButton();
   }
</script>

<!-- The template for our big button -->

<button on:click={buttonClick}>💵 Click me for £{formatNumber(getButtonClickValue(), 2)} 💵</button>

<style>
   button {
      padding: 1rem 2rem;
   }
</style>
