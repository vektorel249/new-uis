<template>
    <div class="col-12 col-md-6">
        <Empty v-if="participants.length == 0" />
        <ul v-else class="list-group list-group-flush">
            <li v-for="p in participants" class="list-group-item d-flex justify-content-between">
                <span>{{ p.firstName }} {{ p.lastName }}</span>
                <button class="btn btn-sm btn-primary" @click="select(p.id)">
                    <span class="bi bi-chevron-right"></span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import Empty from "./Empty.vue";
export default {
    name: "LeftList",
    emits: ["onSelected"],
    components: {
        Empty
    },
    props: {
        participants: {
            type: Array
        }
    },
    methods: {
        select(id) {
            this.$emit("onSelected", id);
        }
    }
}
</script>