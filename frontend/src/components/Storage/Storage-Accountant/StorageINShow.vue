<template>
    <div>
        <div class="bg-gray-600">
            <tr v-for="">
                <td>{{ mail }}</td>
                <td>{{ date }}</td>
                <td>{{ adress }}</td>
                <td>{{ company }}</td>
                <td>{{ fliers }}</td>
            </tr>
        </div>
    </div>
</template>

<script>
    export default {
        data: {
            current:{mail: '',
            date: '',
            adress:'',
            company:'',
            fliers:''},
            arr:[]
        },
    }
</script>

<style lang="scss" scoped>

</style>