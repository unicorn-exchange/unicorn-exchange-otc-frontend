import {APIV1} from "../src/services/api/api_v1";
import {Headers} from "../src/types/enums/enums";

const api = new APIV1("https://some-api.com", {
  [Headers.TestEnv]: true,
  [Headers.TestEnvPassword]: `password`,
});
const user1 = "user1";
const password1 = "123456789";
const password2 = "password2";

describe("Sign in test", () => {
  it("should NOT sign in return a bearer token", () => {
    return api
      .signIn({username: "wrong", password: "wrong"})
      .then(res => {
        expect(res.ok).toBeFalsy();
        expect(Array.isArray(res.errors)).toBeTruthy();
        expect(res.errors.length).toBeGreaterThan(0);
        return res;
      });
  });

  it("should sign in return a bearer token", () => {
    return api
      .signIn({username: user1, password: password1})
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.token).toBeDefined();
        expect(res.errors).toBeNull();
        return res;
      });
  });

  it("should sign up and return a bearer token", () => {
    return api
      .signUp({username: "test", password: password2})
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.token).toBeDefined();
        expect(res.errors).toBeNull();
        return res;
      });
  });

  it("should change password", () => {
    return api
      .changePassword({oldPassword: password1, newPassword: password2})
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.errors).toBeNull();
        return res;
      });
  });
});
