<script lang="ts">
	import "./tailwind.css";
	export let count = 0;

	setInterval(() => {
		count++;
	}, 1000);
</script>



<div class="w-full h-full flex flex-col justify-center item-center">
	<div class="mx-auto">
		<p class="text-5xl text-cat">Svelte + Tailwind + Snowpack</p>
		<div class="flex justify-center p-5">
			<p
				class="font-bold text-2xl {count % 2
					? 'text-yellow-400'
					: 'text-blue-500'}"
			>
				Count: {count}
			</p>
		</div>
		<div class="flex justify-center p-5">
			<p
				class="text-5xl text-white bg-gradient-to-br from-red-500 to-blue-500 p-3 rounded-full"
			>
				My Exapmle
			</p>
		</div>
		<div class="flex justify-center p-5">
			<p>
				Visit the <a
					class="text-blue-600 underline"
					href="https://svelte.dev/tutorial">Svelte tutorial</a
				> to learn how to build Svelte apps.
			</p>
		</div>
	</div>
</div>