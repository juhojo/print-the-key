<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>
<style>

</style>

<button data-cy="reset" on:click={() => dispatch('reset')} class="kbc-button kbc-button-danger">
  Reset
</button>