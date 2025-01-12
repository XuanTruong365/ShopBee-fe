<script setup>

</script>
<template>
    <div class="py-5">
        <form class="reset-pass-main d-flex flex-column sm mx-auto p-4 gap-3">
            <h1 class="text-center h3 ">Reset your password</h1>
            <p class="mt-3 mb-5 font-weight-medium text-center text-muted">Provide your email to reset your password</p>
            <div class="flex-grow-1 d-flex flex-column gap-2 w-100">
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input class="form-control" type="email" autocomplete="username" id="email" required name="email" value="">
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.reset-pass-main {
    max-width: 448px;
}
</style>