import { useCallback, useEffect, useState } from "react";

const IMMERSIVE_CLASS = "freshman-immersive";

function getFullscreenElement() {
  return document.fullscreenElement ?? document.webkitFullscreenElement ?? null;
}

function isFullscreenApiSupported() {
  const el = document.documentElement;
  return Boolean(el.requestFullscreen || el.webkitRequestFullscreen);
}

function isImmersiveActive() {
  return document.documentElement.classList.contains(IMMERSIVE_CLASS);
}

function setImmersiveActive(active) {
  document.documentElement.classList.toggle(IMMERSIVE_CLASS, active);
}

async function enterFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) return el.requestFullscreen();
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
}

async function leaveFullscreen() {
  if (document.exitFullscreen) return document.exitFullscreen();
  if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
}

export function useFullscreen({ immersiveFallback = false } = {}) {
  const apiSupported = isFullscreenApiSupported();
  const [apiActive, setApiActive] = useState(() => Boolean(getFullscreenElement()));
  const [immersive, setImmersive] = useState(() => isImmersiveActive());

  const isSupported = apiSupported || immersiveFallback;
  const isActive = apiActive || immersive;
  const mode = apiActive ? "native" : immersive ? "immersive" : null;

  useEffect(() => {
    const sync = () => setApiActive(Boolean(getFullscreenElement()));
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  useEffect(() => {
    return () => setImmersiveActive(false);
  }, []);

  const toggle = useCallback(async () => {
    if (apiSupported) {
      try {
        if (getFullscreenElement()) await leaveFullscreen();
        else {
          setImmersiveActive(false);
          setImmersive(false);
          await enterFullscreen();
        }
      } catch {
        /* user denied or browser blocked */
      }
      return;
    }

    if (immersiveFallback) {
      setImmersive((prev) => {
        const next = !prev;
        setImmersiveActive(next);
        return next;
      });
    }
  }, [apiSupported, immersiveFallback]);

  return { isActive, isSupported, mode, toggle };
}
