import {APIV1} from "../src/services/api/api_v1";
import {Headers} from "unicorn-types/types/enums/enums";

const api = new APIV1("https://some-api.com", {
  [Headers.TestEnv]: true,
  [Headers.TestEnvPassword]: `password`,
});

describe("Sign in test", () => {
  it("should NOT sign in return a bearer token", () => {
    return api
      .axios.post("/auth/sign-in", {email: "wrong", password: "wrong"})
      .then(res => {
        expect(res.data.ok).toBeFalsy();
        expect(Array.isArray(res.data.errors)).toBeTruthy();
        expect(res.data.errors.length).toBeGreaterThan(0);
        return res;
      });
  });
});
