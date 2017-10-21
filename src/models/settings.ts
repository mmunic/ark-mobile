export class UserSettings {
  public language: string;
  public currency: string;
  public darkMode: boolean;
  public notification: boolean;

  constructor() {};

  public static defaults(): UserSettings {
    let settings = new UserSettings();
    settings.language = 'en';
    settings.currency = 'btc';
    settings.darkMode = false;
    settings.notification = false;

    return settings;
  }

}