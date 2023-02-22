<script lang="ts">
   import { gameModel } from "../gamelogic/gamemodel";
   import { sendMessage } from "../gamelogic/notifications";
   import { resetSaveGame, saveSaveGame } from "../gamelogic/saveloadfunctions";

   /**
    * On click action to save the game in localstorage
    */
   function saveGame() {
      saveSaveGame($gameModel.saveData);
      sendMessage("Your data has been saved!");
   }

   /**
    * On click action to reset the save game in localstorage
    */
   function resetGame() {
      if (confirm("Are you REALLY Sure you want to reset all data? (IF you do, you can't get it back!")) {
         resetSaveGame();
         sendMessage("Save Data has been wiped");
      }
   }
</script>

<h1>Options</h1>

<button on:click={saveGame}>Save All Stats</button>

<button on:click={resetGame} style="background-color: red;">RESET All Data</button>

<style>
</style>
