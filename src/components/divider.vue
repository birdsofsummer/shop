<template>
    <div class="divider  clearfix"></div>
</template>

<script>
export default { name: 'Divider', }
</script>

<style>

.divider::after {
	display: table;
	height: 1em;
	border-bottom: 1px dashed #ddd;
	content: '';
	width: 100%;
	margin-bottom: 1em;
}
</style>
