<template>
    <div class="col-12 col-md-6">
        <Empty v-if="participants.length == 0" />
        <ul v-else class="list-group list-group-flush">
            <li v-for="p in participants" class="list-group-item d-flex justify-content-between">
                <button class="btn btn-sm btn-primary" @click="exclude(p.id)">
                    <span class="bi bi-chevron-left"></span>
                </button>
                <span>{{ p.firstName }} {{ p.lastName }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Empty from "./Empty.vue";
export default {
    name: "RightList",
    emits: ["onExcluded"],
    components: {
        Empty
    },
    props: {
        participants: {
            type: Array
        }
    },
    methods: {
        exclude(id) {
            this.$emit("onExcluded", id);
        }
    }
}
</script>