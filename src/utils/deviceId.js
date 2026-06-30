const DEVICE_STORAGE_KEY = "freshman-device-id";

export function getDeviceId() {
  try {
    let id = localStorage.getItem(DEVICE_STORAGE_KEY);
    if (!id) {
      id = crypto.randomUUID?.() ?? `dev-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem(DEVICE_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return "anonymous-device";
  }
}

/** Short label for UI (first 8 chars). */
export function getDeviceLabel(deviceId = getDeviceId()) {
  return deviceId.replace(/-/g, "").slice(0, 8).toUpperCase();
}

export function scopedStorageKey(baseKey, deviceId = getDeviceId()) {
  return `${baseKey}-${deviceId}`;
}

/** Migrate legacy unscoped key to device-scoped key once. */
export function migrateLegacyStorage(legacyKey, scopedKey) {
  try {
    const legacy = localStorage.getItem(legacyKey);
    if (legacy && !localStorage.getItem(scopedKey)) {
      localStorage.setItem(scopedKey, legacy);
      localStorage.removeItem(legacyKey);
    }
  } catch {
    /* ignore */
  }
}
