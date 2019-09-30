export class CONFIG {
  static readonly RECAPTCHA_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  static readonly THEME = "light";
  static readonly FAKE_NETWORK = true;
  static readonly IS_DEV = true;
  static readonly DEBUG_NETWORK = true;
}

class ProfileRoutes {
  static readonly PROFILE = "profile";
  static readonly NOTIFICATIONS = "notifications";
  static readonly INFO = "information";
  static readonly CATEGORIES = "categories";
  static readonly RATE = "rate";
  static readonly INVOICES = "invoices";
  static readonly CHANGE_PASSWORD = "change-password";
}

export class ROUTES {
  static readonly SIGN_IN = "sign-in";
  static readonly SIGN_UP = "sign-up";
  static readonly OPEN_MARKET = "open-market";
  static readonly FULL_REGISTRATION = "full-registration";
  static readonly ORDERS = "orders";
  static readonly CREATE_ORDER = "create-order";
  static readonly PROFILE = ProfileRoutes;
}
