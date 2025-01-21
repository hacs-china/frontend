import type { FlattenObjectKeys } from "../../homeassistant-frontend/src/common/translations/localize";

type TranslationDict = typeof import("../localize/languages/zh-Hans.json");

export type HacsLocalizeKeys = FlattenObjectKeys<TranslationDict>;
