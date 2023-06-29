<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-8 offset-2">
        <div class="card my-4">
          <div class="card-header">
            <h3>Login Form</h3>
          </div>
          <div class="card-body">
            <div class="alert alert-danger" role="alert" v-if="validationStatus">
              A simple danger alert—check it out!
            </div>
            <form action="">
              <div class="form-group">
                <label for="userEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Enter email..."
                  autocomplete="off"
                  v-model="loginData.email"
                />
              </div>
              <div class="form-group">
                <label for="userPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="userPassword"
                  id="userPassword"
                  placeholder="Enter password..."
                  autocomplete="off"
                  v-model="loginData.password"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn bg-danger btn-sm w-100"
                  @click="loginProcess()"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./../js/LoginPage.js"></script>