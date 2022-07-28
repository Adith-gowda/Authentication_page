var signinHtml = `
<div>
  <h1>Login</h1>
  <form method="POST" action="">
    <div class="text_field">
      <input type="text" name="email" required />
      <span></span>
      <label>Email</label>
    </div>
    <div class="text_field">
      <input type="password" name="password" required />
      <span></span>
      <label>Password</label>
    </div>
    <input type="submit" name="submit" value="Sign in" />
  </form>
</div>
`;

  var signupHtml = `
  <div>
    <h1>Register</h1>
    <form method="POST" action="">
      <div class="text_field">
        <input type="text" name="name" required />
        <span></span>
        <label>Name</label>
      </div>
      <div class="text_field">
        <input type="text" name="email" required />
        <span></span>
        <label>Email</label>
      </div>
      <div class="text_field">
        <input type="password" name="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="text_field">
        <input type="password" name="confirm_password" required />
        <span></span>
        <label>Confirm Password</label>
      </div>
      <div class="text_field">
        <input type="text" name="phone" required />
        <span></span>
        <label>Phone</label>
      </div>
      <input type="submit" name="submit" value="Sign Up" />
    </form>
</div>
`;



const divId = document.getElementById("divId");

let isLogin = true;

const container = document.getElementById("container");

container.innerHTML = signinHtml;

divId.innerHTML = `<p>Don't have an account? <p>Sign up</p></p>`;

divId.addEventListener("click", () => {
  if (isLogin) {
    container.innerHTML = signupHtml;
    isLogin = false;
    divId.innerHTML = `<p>Already have an account? <p>Sign in</p></p>`;
  } else {
    container.innerHTML = signinHtml;
    isLogin = true;
    divId.innerHTML = `<p>Don't have an account? <p>Sign up</p></p>`;
  }
});

