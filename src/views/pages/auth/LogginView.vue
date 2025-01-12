<script setup>

</script>
<template>
    <div style="padding-top: 116px;">
        <div class="d-flex justify-content-center pt-4 pb-5">
            <div class="container d-flex flex-column align-items-center">
                <h2 class="text-center">Hello, Beautiful</h2>
                <p class="mt-2 mb-4 text-muted font-weight-medium text-center">Log in to your Birchbox account.</p>
                <form class="d-flex flex-column align-items-center" method="post">
                    <div class="rounded bg-danger-subtle p-4 w-100 mb-4" style="max-width: 800px;">
                        <i class="fa-solid fa-bell text-warning pr-4 pt-1" aria-hidden="true"></i>
                        <p class="text-muted"><strong class="font-weight-medium">Important note</strong><br>
                            <span>If you're having trouble logging in, please click the Forgot Password link below the log in button. Once you reset your password you should be able to log into your Birchbox account page. Email <a class="font-weight-medium text-primary" href="mailto:info@birchbox.com">info@birchbox.com</a> if you're still having issues!</span>
                        </p>
                    </div>
                    <div class="w-100 d-flex flex-column align-items-center" style="max-width: 400px;">
                        <input name="csrfToken" type="hidden" value="9e40bf8724d80c56905c9c2ebf15e667b344c5b2883ea6ff3bf20d410813e4a6">
                        <div class="mb-3 w-100">
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" type="email" autocomplete="username" id="email" required name="email">
                        </div>
                        <div class="mb-3 w-100">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" type="password" autocomplete="new-password" id="password" required name="password">
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Log in</button>
                    </div>
                </form>
                <a class="text-decoration-underline text-muted mt-3" href="/reset-password">Forgot Password?</a>
                <div class="d-flex align-items-center my-4">
                    <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                    <p class="mx-3 text-muted font-weight-medium">Or</p>
                    <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                </div>
                <button class="btn btn-light">Sign up</button>
                <div class="text-center mt-5" style="max-width: 200px;">
                    <p class="small text-muted">By signing up you agree to Birchbox's <a class="text-decoration-underline" href="/terms-conditions">Terms of Service</a> and <a class="text-decoration-underline" href="/privacy-policy">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>