<template>
    <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item">
                        <button :value="modelValue" class="btn btn-primary fas ">
                        </button>
                    </li>
    </ul>
</template>

<script>
export default {
  name: 'mynav-button',
  props: {
    modelValue: [String]
  },
}
</script>

<style>

</style>