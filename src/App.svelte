<script>
  import 'keyboard-css'
  import Key from './Key.svelte'
  import Reset from './Reset.svelte'
  import { constants } from './constants.js'

  const defaultValues = [constants.defaultValue]
  let values = defaultValues

  function keyValue(key) {
    return String(constants.keyboard[key] || key).toLowerCase()
  }

	function handleKeydown(event) {
    if (values.includes(constants.defaultValue)) {
      values = []
    }
    const value = keyValue(event.key)
    if (!values.includes(value)) {
      values = [...values, value]
    }
	}

  function handleKeyup(event) {
    const eventValue = keyValue(event.key)
    values = values.filter((value) => value != eventValue)
    if (!values.length) {
      values = defaultValues
    }
  }
  
  function handleReset() {
    values = defaultValues
  }
</script>
<style>
  #App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    min-height: 100vh;
    padding: 1em;
  }

  span {
    padding: 0 1em;
  }
</style>
<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />
<div id="App">
  <ul>
    {#each values as value, i}
      {#if i !== 0}
        <span>+</span>
      {/if}
      <Key value={value} />
    {/each}
  </ul>
  <div class="mt-2">
    <Reset on:reset={handleReset} />
  </div>
</div>