<template>
    <div>
        <div class="bg-gray-600" >
            <tr v-for="i in arr" :key="i.mail" >
                <td>{{ i.mail }}</td>
                <td>{{ i.date }}</td>
                <td>{{ i.adress }}</td>
                <td>{{ i.company }}</td>
                <td>{{ i.fliers }}</td>
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
        methods: {
            addCurrent() 
            { this.arr.push(JSON.parse(JSON.stringify(this.current))); }
        }
    }
</script>

<style lang="scss" scoped>

</style>