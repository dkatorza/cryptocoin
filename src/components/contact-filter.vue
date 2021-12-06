<template>
    <form>
      <input class="input-general" @input="filter" type="text" placeholder="search" v-model="filterBy.searchStr"/>
    </form>
</template>

<script>
    export default {
        name: 'contact-filter',
        data() {
            return {
                filterBy: {
                    searchStr: ''
                }
            }
        },
        methods: {
            filter() {
                this.$emit('filterList', {...this.filterBy});
            }
        }
    }
</script>