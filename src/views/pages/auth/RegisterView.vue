<script setup>

</script>
<template>
    <div class="register-view-container">
        <section class="section">
            <div class="container d-flex flex-column align-items-center justify-content-center">
                <div class="w-100" style="max-width: 24rem;">
                    <h3 class="text-center">Let's get you set up</h3>
                    <p class="text-center text-muted mt-2 mb-4">Create an account so we can remember you</p>
                    <div class="d-flex flex-column">
                        <form method="post">
                            <fieldset class="d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label for="first-name" class="form-label">First Name</label>
                                            <input class="form-control" type="text" id="first-name" autocomplete="given-name" required name="first-name">
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3">
                                            <label for="last-name" class="form-label">Last Name</label>
                                            <input class="form-control" type="text" id="last-name" autocomplete="family-name" required name="last-name">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input class="form-control" type="email" autocomplete="username" id="email" required name="email">
                                </div>
                                <div class="mb-3 form-check">
                                    <input class="form-check-input" type="checkbox" id="acceptMarketing" name="acceptsMarketing">
                                    <label for="acceptMarketing" class="form-check-label text-muted">Yes, I'd like to sign up for messages and be first to know about offers personalized just for me.</label>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label for="password" class="form-label">Password</label>
                                    <input class="form-control pr-4" type="password" autocomplete="new-password" required id="password" name="password">
                                    <button type="button" class="btn btn-link position-absolute end-0 text-decoration-none btn-link-view">View</button>
                                </div>
                                <button class="btn-submit btn d-flex justify-content-center gap-2" type="button"><span>Sign up</span></button>
                            </fieldset>
                            <fieldset class="d-none mt-4">
                                <h2 class="fw-medium">Verify your phone number</h2>
                                <p class="text-muted">Enter the code sent to your phone number: <b></b></p>
                                <div class="mb-3">
                                    <label for="auth-code" class="form-label">Enter the code</label>
                                    <input type="text" class="form-control" id="auth-code" required autocomplete="one-time-code" name="code">
                                </div>
                                <button class="btn btn-primary" type="submit">Verify</button>
                                <button class="btn btn-secondary" type="button">Resend code</button>
                            </fieldset>
                        </form>
                        <div class="d-flex gap-2 align-items-center my-4">
                            <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                            <p class="fw-medium text-muted mb-0">or</p>
                            <div aria-hidden="true" class="w-100 border-bottom border-gray"></div>
                        </div>
                        <a class="btn btn-secondary w-100" href="/profile">Log in</a>
                        <div class="text-center mt-4">
                            <p class="text-muted small">By signing up you agree to Birchbox's <a class="text-decoration-underline" href="/terms-conditions">Terms of Service</a> and <a class="text-decoration-underline" href="/privacy-policy">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>

</style>