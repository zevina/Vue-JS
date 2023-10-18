<template>
    <div>
        <h2> {{ user.name }}</h2>
        <h2> {{ user.surname }}</h2>
        <h3> {{ user.email }}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object,
        }
    }
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 250px;
    border: 1px solid black;
}
</style>